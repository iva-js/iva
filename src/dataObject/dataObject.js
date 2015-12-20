import Obj from "../object";

import {option, copy, isObject, isNumeric, isArray, isUndefined, toInt} from "../utils";


/**
 * DataObject is basicly a table where columns are sequences and rows are xs.
 * Columns are determined by their ids that must be strings.
 * Rows are determined by the value of their xs. X can either be number or string.
 * Columns and rows are not sorted in any way and stored in the order they were added.
 */
export default class DataObject extends Obj {
    constructor(d, parent) {
        super(d, parent);

        let __ = this.__;

        let table = __.table = {};

        d = option(d, {});
        
        d.columns = option(d.columns, []);
        d.rows = option(d.rows, []);

        this.columns(d.columns);
        //this.rows(d.rows);

    }

    clear(){
        this.__.table = {};
    }

    columns(columns){
        let __ = this.__;

        if(columns === undefined){
            return __.table;
        }

        this.clear();
        this.addColumns(columns);
    }

    addColumns(columns){
        let __ = this.__;

        if(!Array.isArray(columns)){
            throw new TypeError("Columns should be array and not " + typeof columns);
        }

        columns.forEach(column => {
            this.addColumn(column);
        });
    }

    addColumn(column){
        let __ = this.__;

        if(typeof column.id !== "string"){
            throw new TypeError("Column id should be string and not " + typeof column.id);
        }

        if(this.getColumnById(column.id) !== undefined){
            throw new Error(`Column ids should be unique but ${column.id} is already presented in table`);
        }

        __.table[column.id] = {};
        
        this.setValuesToColumn(column.id, column.values);
    }

    setValuesToColumn(id, values){
        if(typeof id !== "string"){
            throw new TypeError("Column id should be string and not " + typeof id);
        }

        if(!Array.isArray(values)){
            throw new TypeError("Values should be string and not " + typeof values);
        }

        let column = this.getColumnById(id);
        
        let offset = this.getNextX(id);

        for(let i = 0; i < values.length; i++){
            let value = values[i];
            if(isUndefined(value.x)){
                column[i+offset] = this.__value(value);
            } else {
                column[value.x] = this.__value(value);
            }
        }

    }

    setValueToColumn(id, value){
        this.setValuesToColumn(id, [value]);
    }

    getColumnById(id){
        let __ = this.__;

        return __.table[id];
    }

    rows(rows){
        let __ = this.__;

        if(rows === undefined){
            return rows;
        }

        this.clear();
        this.addRows(rows);
    }

    addRows(rows){
        if(!isArray(rows)){
            throw new TypeError("Rows should be array and not " + typeof rows);
        }

        rows.forEach(row => {
            this.addRow(row);
        });
    }

    addRow(row){
        if(!isArray(row.values)){
            throw new TypeError("Row values should be array and not " + typeof row.values);
        }

        row.values.forEach(value => {
            setValueToRow(row.x, value);
        });        
    }

    setValueToRow(x, value){
        let __ = this.__;

        if(x === undefined){
            throw new Error("Each row should have x");
        }

        __.table.forEach(column => {
            this.setValueToColumn(column.id, x, value);
        });
    }

    getNextX(id){
        let __ = this.__;
        let column = __.table[id];
        let m = -1;

        for(let i in column){
            let x = (isUndefined(column[i].x) ? i : column[i].x);
            if(x > m){
                m = x;
            }
        }

        return toInt(m)+1;
    }

    copy(){
    }

    __value(v){
        if(isObject(v)){
            let obj = {};

            // This is done for memory efficiency so we don't have smth like
            // {
            //     y: 10,
            //     x: undefined,
            //     label: undefined,
            //     color: undefined
            // }

            if(!isUndefined(v.y)){
                obj.y = v.y;
            }
            if(!isUndefined(v.x)){
                obj.x = v.x;
            }
            if(!isUndefined(v.label)){
                obj.label = v.label;
            }
            if(!isUndefined(v.color)){
                obj.color = v.color;
            }
            return obj;
        }

        if(isNumeric(v)){
            return {
                y: v
            };
        }
    }


}

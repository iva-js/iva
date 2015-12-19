import Obj from "../object";

import {option, copy, isObject, isNumeric} from "../utils";


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
        this.rows(d.rows);

    }

    columns(columns){
        let __ = this.__;

        if(columns === undefined){
            return __.table;
        }

        __.table = [];
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

        __.table.push({
            id: column.id,
            values: []
        });
        
        this.addValuesToColumn(column.id, column.values);
    }

    addValuesToColumn(id, values){
        if(typeof id !== "string"){
            throw new TypeError("Column id should be string and not " + typeof id);
        }

        if(!Array.isArray(values)){
            throw new TypeError("Values should be string and not " + typeof values);
        }

        let column = this.getColumnById(id);

        values.forEach(value => {
            column.values.push(this.__value(value));
        });

        column.dirty = true;

    }

    addValueToColumn(id, value){
        this.addValuesToColumn(id, [value]);
    }

    __value(v){
        if(isObject(v)){
            return {
                y: v.y,
                x: v.x,
                label: v.label,
                color: v.color
            };
        }

        if(isNumeric(v)){
            return {
                y: v
            };
        }
    }

    getColumnById(id){
        let columns = this.columns();

        for(let i = columns.length-1; i >= 0; i--){
            if(columns[i].id === id){
                return columns[i]
            }
        }
    }

    rows(){
    }

    copy(){
    }

}

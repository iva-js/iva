import Obj from "../object";

import {option, copy, isObject, isNumeric, isArray, isUndefined, toInt, throwIfNotString, throwIfNotArray, throwIfUndefined} from "../utils";


/**
 * DataObject is basicly a table where columns are sequences and rows are xs.
 * Columns are determined by their ids that must be strings.
 * Rows are determined by the value of their xs. X can either be number or string.
 * Columns and rows are not sorted in any way and stored in the order they were added.
 *
 * Note that not every set method calls dirty(true) itself but rather calls other methods that will.
 * This is done for not calling dirty(true) extra times. E.g. calling addColumn([...]) will always call setValuesToColumn([...]),
 * and then it will call dirty(true).
 */
export default class DataObject extends Obj {
    constructor(d, parent) {
        super(d, parent);

        let __ = this.__;

        let table = __.table = new Map()

        d = option(d, {});
        
        d.columns = option(d.columns, []);
        d.rows = option(d.rows, []);

        this.columns(d.columns);
        this.addRows(d.rows);

    }

    clear(){
        this.__.table.clear();
        this.dirty(true);
        return this;
    }

    columns(columns){
        let __ = this.__;

        if(columns === undefined){
            return __.table;
        }

        this.clear();
        this.addColumns(columns);

        return this;
    }

    column(id, values){
        let __ = this.__;

        if(values === undefined){
            return __.table.get(id);
        } else {
            this.emptyColumn(id);
            this.setValuesToColumn(id, values);
            return this;
        }
    }

    addColumns(columns){
        let __ = this.__;

        if(!Array.isArray(columns)){
            throw new TypeError("Columns should be array and not " + typeof columns);
        }

        columns.forEach(column => {
            this.addColumn(column.id, column.values);
        });

        return this;
    }

    addColumn(id, values){
        let table = this.__.table;

        throwIfNotString(id, "Column id");

        throwIfNotArray(values, "Column values");

        if(this.column(id) !== undefined){
            throw new Error(`Columns can't have equals ids but ${id} is presented twice`);
        }

        let newColumn = new Map();

        table.set(id, newColumn);

        this.setValuesToColumn(id, values);

        return this.column(id);
    }

    columnValue(id, x, value){
        if(value === undefined){
            return this.column(id).get(x);
        } else {
            let column = this.column(id);

            if(column === undefined){
                column = this.addEmptyColumn(id);
            }

            column.set(x, this.__value(value));
        }

        this.dirty(true);

        return this;
    }

    setValuesToColumn(id, values){
        throwIfNotString(id, "Column id");

        throwIfNotArray(values, "Column values");
        
        let column = this.column(id);

        throwIfUndefined(column, "Can't set values to undefined column");

        for(let i = 0; i < values.length; i++){
            let value = values[i];
            if(isUndefined(value.x)){
                column.set(i, this.__value(value));
            } else {
                column.set(value.x, this.__value(value));
            }
        }

        this.dirty(true);

        return this;
    }

    addEmptyColumn(id){
        return this.addColumn(id, []);
    }

    emptyColumn(id){
        throwIfNotString(id, "Column id");

        let column = this.column(id);

        if(column){
            column.clear();
        } else {
            this.addEmptyColumn(id);
        }

        this.dirty();

        return this;
    }

    removeColumn(id){
        this.__.table.delete(id);

        this.dirty(true);

        return this;
    }

    rows(rows){
        if(rows === undefined){
            return this.toRows();
        }

        throwIfNotArray(rows, "Rows");

        this.clear();
        this.addRows(rows);

        return this;
    }

    addRows(rows){
        throwIfNotArray(rows, "Rows");
        rows.forEach(row => {
            this.row(row.x, row.values);
        });

        return this;
    }

    row(x, values){
        throwIfUndefined(x, "Row x");

        this.emptyRow(x);

        this.addValuesToRow(x, values);

        return this;
    }

    addValuesToRow(x, values){
        throwIfUndefined(x, "Row x");
        throwIfNotArray(values, "Row values");

        values.forEach(value => {
            this.columnValue(value.id, x, value);
        });

        return this;
    }

    emptyRow(x){
        let table = this.__.table;
        for(let [i, column] of table){
            if(column.has(x)){
                column.delete(x);
            }
        }

        this.dirty(true);

        return this;
    }

    toRows(){
        let table = this.__.table;

        let rows = new Map();

        for(let [i, column] of table){
            for(let [x, value] of column){
                if(rows.has(x)){
                    rows.get(x).set(i, value);
                } else {
                    rows.set(x, new Map([[i, value]]));
                }
            }
        }

        return rows;
    }

    copy(){
    }

    isEmpty(){
        return this.__.table.size === 0;
    }

    /*
     * Gets next available x in column with given id.
     * Say column is [{ x: 10 }, { x: 11 }, { x: 22 }].
     * The result will be 23 as it is the next x in this column.
     */
    __getNextX(id){
        let column = this.column(id);
        let m = -1;

        for(let [i, value] of column){
            let x = (isUndefined(column.x) ? i : column.x);
            if(x > m){
                m = x;
            }
        }

        return toInt(m)+1;
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

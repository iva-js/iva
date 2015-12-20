import Handler from "./basic";
import {option} from "../utils";

export default class ColumnHandler extends Handler {
    constructor(){
        super();
    }

    computeRenderObject(data, option){
        let d = this.d();

        this.processColumns(data.columns);

        this.processSize(option.size);

        return d;
    }

    init(){
        let d = this.d();

        d.option = {
            size: {}
        };

        d.data = {
            columns: {
                values: []
            }
        };
    }

    processSize(size){
        let d = this.d();

        if(!size.dirty()){
            return;
        }

        d.option.size.width = size.width();
        d.option.size.height = size.height();

        d.option.size.dirty = true;
        
    }

    processColumns(columns){
        let d = this.d();

        if(!columns.dirty()){
            return;
        }

        d.data.columns.values = [];

        let cols = columns.values();

        cols.forEach(column => {
            d.data.columns.values.push(this.processColumn(column));
        });
        
        d.data.columns.dirty = true;

        this.columnsToRows(columns);
    }

    processColumn(column){
        let processed = {
            id: column.id(),
            values: []
        };

        let i;
        let values = column.values();
        for(i = 0; i < values.length; i++){
            let value = values[i];
            processed.values.push(this.processValue(value, { x: i }));
        }

        return processed;
    }

    processValue(v, d){
        d = option(d, {});

        return {
            x: option(v.x, d.x),
            y: v.y,
            dirty: v.dirty,
            label: v.label
        }
    }

}

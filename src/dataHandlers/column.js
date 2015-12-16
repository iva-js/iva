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

        d.option.size.width = size.width;
        d.option.size.height = size.height;

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

    }

    processColumn(column){
        let processed = [];

        let i;
        let values = column.values();
        for(i = 0; i < values.length; i++){
            let value = values[i];
            let y = option(value, i);
            processed.push(this.copyValue(value), { y: y });
        }
        return processed;
    }

    copyValue(v, d){
        d = option(d, {});

        return {
            x: v.x,
            y: option(v.y, d.y),
            dirty: v.dirty,
            label: v.label
        }
    }

}

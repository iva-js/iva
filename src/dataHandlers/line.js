import Handler from "./basic";
import {option, toString, isDefined} from "../utils";

export default class LineHandler extends Handler {
    constructor(){
        super();
    }

    init(){
        let d = this.d();
        d.data.lines = {
            dirty: true,
            values: []
        };
    }

    computeRenderObject(data, option){
        let d = this.d();

        this.processSize(option.size);

        this.processLines(data.columns());

        return d;
    }

    processLines(lines){
        let d = this.d();

        for(let [id, line] of lines){
            d.data.lines.values.push(this.processLine(line, id));
        } 

    }

    processLine(line, id){
        let col = {
            dirty: true,
            values: [],
            id: id
        };

        for(let [x, value] of line){
            col.values.push(this.processValue(value, x));
        }

        return col;
    }

    processValue(value, x){
        let v = {};

        if(isDefined(x)){
            v.x = x;
        }
        if(isDefined(value.x)){
            v.x = value.x;
        }
        if(isDefined(value.y)){
            v.y = value.y;
        }
        if(isDefined(value.color)){
            v.color = value.color;
        }
        if(isDefined(value.label)){
            v.label = value.label;
        }

        return v;
    }
}

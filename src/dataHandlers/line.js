import RectangularHandler from "./rectangular";
import {option, toString, isDefined} from "../utils";

export default class LineHandler extends RectangularHandler {
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

        super.computeRenderObject(data, option);

        d.data.lines = this.processLines(data.columns());

        return d;
    }

    processLines(lines){
        let ret = {
            dirty: true,
            values: []
        };

        for(let [id, line] of lines){
            ret.values.push(this.processLine(line, id));
        } 

        return ret;
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

import RectangularHandler from "./rectangular";
import {option, toString, isDefined} from "../utils";

export default class LineHandler extends RectangularHandler {
    constructor(){
        super();
    }

    init(){
        let d = this.d();
    }

    computeRenderObject(data, option){
        let d = this.d();

        super.computeRenderObject(data, option);

        d.data.rectangular.lines = this.processLines(data.columns());

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
        let ret = {
            dirty: true,
            values: [],
            id: id
        };

        for(let [x, value] of line){
            ret.values.push(this.processValue(value, x));
        }

        return ret;
    }
}

import RectangularHandler from "./rectangular";
import {option, isDefined} from "../utils";

export default class BarHandler extends RectangularHandler {
    constructor(){
        super();
    }

    init(){
    }

    computeRenderObject(data, option){
        super.computeRenderObject(data, option);

        let d = this.d();

        d.clearRectangularData({
            bars: false
        });

        d.data.rectangular.bars = this.processBars(data.columns());

        if(option.mode() === "stacked"){
            d.data.rectangular.bars = this.stack(d.data.rectangular.bars);
        } else if(option.mode() === "normalized"){
            d.data.rectangular.bars = this.normalize(d.data.rectangular.bars);
        }

        d.data.ids = this.ids(d.data.rectangular.bars);
        d.data.ranges = this.computeRanges(d.data.rectangular.bars);
        d.data.rectangular.bars = this.setY0(d.data.rectangular.bars, 0);

        d.data.rectangular.bars = this.turnToRows(d.data.rectangular.bars);

        return d;
    }

    processBars(bars){
        let ret = {
            dirty: true,
            values: []
        };

        for(let [id, bar] of bars){
            ret.values.push(this.processBar(bar, id));
        }

        return ret;
    }

    processBar(bar, id){
        let ret = {
            dirty: true,
            values: [],
            id: id
        };

        for(let [x, value] of bar){
            ret.values.push(this.processValue(value, x, id));
        }

        return ret;

    }

    processValue(value, x, id){
        let v = super.processValue(value, x);

        if(isDefined(value.y0)){
            v.y0 = value.y0;
        } 
        if(isDefined(id)){
            v.id = id;
        } 
        return v;
    }
}

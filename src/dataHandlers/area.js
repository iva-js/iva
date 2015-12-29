import {isDefined, isUndefined} from "../utils";

import RectangularHandler from "./rectangular";

export default class AreaHandler extends RectangularHandler {

    init(){
        let d = this.d();
    }

    computeRenderObject(data, option){
        let d = this.d();

        super.computeRenderObject(data, option);

        d.clearRectangularData({
            areas: false
        });

        d.data.rectangular.areas = this.processAreas(data.columns());

        if(option.mode() === "stacked"){
            d.data.rectangular.areas = this.stack(d.data.rectangular.areas);
        } else if(option.mode() === "normalized"){
            d.data.rectangular.areas = this.normalize(d.data.rectangular.areas);
        }

        d.data.ranges = this.computeRanges(d.data.rectangular.areas);

        d.data.rectangular.areas = this.setY0(d.data.rectangular.areas, d.data.ranges.yMin);

        return d;
    }

    processAreas(areas){
        let ret = {
            dirty: true,
            values: []
        };

        for(let [id, area] of areas){
            ret.values.push(this.processArea(area, id));
        }

        return ret;
    }

    processArea(area, id){
        let ret = {
            dirty: true,
            values: [],
            id: id
        };

        for(let [x, value] of area){
            ret.values.push(this.processValue(value, x));
        }

        return ret;
    }

    processValue(value, x){
        let v = super.processValue(value, x);

        if(isDefined(value.y0)){
            v.y0 = value.y0;
        } 

        return v;
    }

    setY0(areas, yMin){
        for (let area of areas.values) {
            for (let value of area.values) {
                if(isUndefined(value.y0)){
                    value.y0 = yMin;
                }
            }

        }

        return areas;
    }
}

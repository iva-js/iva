
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

        d.data.ranges = this.computeRanges(d.data.rectangular.areas);

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
}

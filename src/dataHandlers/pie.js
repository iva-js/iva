
import CircularHandler from "./circular";

import {isDefined} from "../utils";

export default class PieHandler extends CircularHandler {

    computeRenderObject(data, option){
        let d = this.d();

        super.computeRenderObject(data, option);

        d.data.circular.pies = this.processPies(data.columns());
        d.data.ids = this.ids(d.data.circular.pies);

        d.option.pie = option.pie.options();

        return d;
    }

    processPies(pies){
        let ret = {
            dirty: true,
            values: []
        };

        for(let [name, pie] of pies){
            ret.values.push(this.processPie(pie, name));
        }

        return ret;
    }

    processPie(pie, name){
        let ret = {
            dirty: true,
            values: [],
            name: name
        };

        for(let [id, value] of pie){
            ret.values.push(this.processValue(value, id));
        }

        return ret;
    }

    processValue(value, id){
        let v = {};

        if(isDefined(id)){
            v.id = id;
        }
        if(isDefined(value.y)){
            v.y = value.y
        }

        return v;
    }

}

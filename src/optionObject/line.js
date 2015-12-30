
import Obj from "../object";

import {isUndefined} from "../utils";

export default class Line extends Obj {
    constructor(d, parent){
        super(d, parent);

        this.setDefault();
        this.options(d);
    }

    options(d){
        if(isUndefined(d)){
            return {
                points: this.points(),
                interpolate: this.interpolate()
            };
        }

        this.points(d.points);
    }

    points(points){
        let __ = this.__;

        if(isUndefined(points)){
            return __.points;
        }

        __.points = points;

        this.dirty(true);
        return this;
    }

    interpolate(interpolate){
        let __ = this.__;

        if(isUndefined(interpolate)){
            return __.interpolate;
        }

        __.interpolate = interpolate;

        this.dirty(true);
        return this;
    }

    getDefault(){
        return {
            points: false,
            interpolate: "linear"
        };
    }
}

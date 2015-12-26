
import Obj from "../object";

import {isUndefined} from "../utils";

export default class Pie extends Obj {

    constructor(d, parent){
        super(d, parent);

        this.setDefault();
        this.options(d);
    }

    options(d){
        if(isUndefined(d)){
            return {
                innerRadius: this.innerRadius(),
                outerRadius: this.outerRadius()
            };
        }
        this.innerRadius(d.innerRadius);
        this.outerRadius(d.outerRadius)
    }

    innerRadius(radius){
        let __ = this.__;

        if(isUndefined(radius)){
            return __.innerRadius;
        }

        __.innerRadius = radius;
        this.dirty(true);
    }

    outerRadius(radius){
        let __ = this.__;

        if(isUndefined(radius)){
            return __.outerRadius;
        }

        __.outerRadius = radius;
        this.dirty(true);
    }
    
    setDefault(){
        return this.options(this.getDefault());
    }

    getDefault(){
        return {
            innerRadius: 0,
            outerRadius: 150
        };
    }
}

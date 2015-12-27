
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
                outerRadius: this.outerRadius(),
                explodeRadius: this.explodeRadius(),
                padAngle: this.padAngle(),
                turnAngle: this.turnAngle()
            };
        }
        this.innerRadius(d.innerRadius);
        this.outerRadius(d.outerRadius)
        this.explodeRadius(d.explodeRadius);
        this.padAngle(d.padAngle);
        this.turnAngle(d.turnAngle);
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

    explodeRadius(radius){
        let __ = this.__;

        if(isUndefined(radius)){
            return __.explodeRadius;
        }

        __.explodeRadius = radius;
        this.dirty(true);
    }

    padAngle(angle){
        let __ = this.__;

        if(isUndefined(angle)){
            return __.padAngle;
        }

        __.padAngle = angle;
        this.dirty(true);
    }

    turnAngle(angle){
        let __ = this.__;

        if(isUndefined(angle)){
            return __.turnAngle;
        }

        __.turnAngle = angle;
        this.dirty(true);
    }
    
    setDefault(){
        return this.options(this.getDefault());
    }

    getDefault(){
        return {
            innerRadius: 0,
            outerRadius: 150,
            explodeRadius: 0,
            padAngle: 0,
            turnAngle: 0,
        };
    }
}


import Obj from "../object";

import {isUndefined} from "../utils";

export default class Bar extends Obj {
    constructor(d, parent){
        super(d, parent);

        this.setDefault();
        this.options(d);
    }

    options(d){
        if(isUndefined(d)){
            return {
                innerGap: this.innerGap(),
                outerGap: this.outerGap()
            };
        }

        this.innerGap(d.innerGap);
        this.outerGap(d.outerGap);
    }

    innerGap(innerGap){
        let __ = this.__;

        if(isUndefined(innerGap)){
            return __.innerGap;
        }

        __.innerGap = innerGap;

        this.dirty(true);
        return this;
    }

    outerGap(outerGap){
        let __ = this.__;

        if(isUndefined(outerGap)){
            return __.outerGap;
        }

        __.outerGap = outerGap;

        this.dirty(true);
        return this;
    }

    getDefault(){
        return {
            innerGap: 0,
            outerGap: 0
        };
    }
}

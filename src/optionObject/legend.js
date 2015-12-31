
import Obj from "../object";

import {isUndefined} from "../utils";

export default class Legend extends Obj {
    constructor(d, parent){
        super(d, parent);

        this.setDefault();
        this.options(d);
    }

    options(d){
        if(isUndefined(d)){
            return {
                visible: this.visible(),
                width: this.width(),
                height: this.height()
            };
        }

        this.visible(d.visible);
        this.width(d.width);
        this.height(d.height);
    }

    visible(visible){
        let __ = this.__;

        if(isUndefined( visible)){
            return __.visible;
        }

        __. visible = visible;

        this.dirty(true);
        return this;
    }

    width(width){
        let __ = this.__;

        if(isUndefined(width)){
            return __.width;
        }

        __.width = width;

        this.dirty(true);
        return this;
    }

    height(height){
        let __ = this.__;

        if(isUndefined(height)){
            return __.height;
        }

        __.height = height;

        this.dirty(true);
        return this;
    }

    getDefault(){
        return {
            visible: false,
            height: 40,
            width: 120
        };
    }
}

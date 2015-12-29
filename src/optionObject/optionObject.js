
import Obj from "../object";

import Size from "./size";
import Axes from "./axes";
import Pie from "./pie";

import {option, throwIfNotArray, isFunction, isUndefined} from "../utils";
import presets from "./presets";

export default class OptionObject extends Obj {
    constructor(d, parent) {
        d = option(d, {});

        super(d, parent);

        this.size = new Size(d.size, this);

        this.handler = d.handler;

        this.axes = new Axes(d.axes, this);

        this.legend = option(d.legend, {});

        this.pie = new Pie(d.pie, this);

        this.stacked(d.stacked);
        this.normalized(d.normalized)

        let presets = option(d.presets, []);
        this.setPresets(presets);
        this.applyPresets();
    }

    __init(d, parent){
        this.__ = {
            parent: parent,
            dirty: true,
            stacked: false,
            normalized: false
        };


    }

    normalized(normalized){
        let __ = this.__;

        if(isUndefined(normalized)){
            return __.normalized;
        }

        __.normalized = normalized;

        if(normalized){
            this.stacked(false);
        }

        this.dirty(true);
    }

    stacked(stacked){
        let __ = this.__;

        if(isUndefined(stacked)){
            return __.stacked;
        }

        __.stacked = stacked;

        if(stacked){
            this.normalized(false);
        }

        this.dirty(true);
    }

    copy(){
        return new OptionObject(this);
    }

    setPresets(prs){
        throwIfNotArray(prs, "Presets");

        this.presets = [];

        prs.forEach(preset => {
            if(isFunction(preset)){
                this.presets.push(preset)
            } else {
                this.presets.push(presets[preset]);
            }
        });

        return this;
    }

    applyPresets(){
        this.presets.forEach(preset => {
            preset(this);
        });
    }
}

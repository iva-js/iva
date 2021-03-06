
import Obj from "../object";

import Size from "./size";
import Axes from "./axes";
import Legend from "./legend";

import Area from "./area";
import Line from "./line";
import Bar from "./bar";
import Pie from "./pie";

import {option, throwIfNotArray, isFunction, isUndefined} from "../utils";
import presets from "./presets";

export default class OptionObject extends Obj {
    constructor(d, parent) {
        d = option(d, {});

        super(d, parent);

        this.size = new Size(d.size, this);

        this.handler = d.handler;
        this.renderer = d.renderer;

        this.axes = new Axes(d.axes, this);

        this.legend = new Legend(d.legend, this);

        this.area = new Area(d.area, this);
        this.line = new Line(d.line, this);
        this.bar = new Bar(d.bar, this);
        this.pie = new Pie(d.pie, this);

        this.setDefault();
        this.options(d);

        let presets = option(d.presets, []);
        this.setPresets(presets);
        this.applyPresets();
    }

    __init(d, parent){
        this.__ = {
            parent: parent,
            dirty: true,
            mode: "normal"
        };


    }

    options(d){
        if(isUndefined(d)){
            return {
                mode: this.mode(),
            };
        }

        this.mode(d.mode);

        return this;
    }

    mode(mode){
        let __ = this.__;
        if(isUndefined(mode)){
            return __.mode;
        }

        __.mode = mode;

        this.dirty(true);

        return this;
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

    setDefault(){
        this.options(this.getDefault());
    }

    getDefault(){
        return {
            easel: "#chart",
            mode: "normal"
        };
    }
}

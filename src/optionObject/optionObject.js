
import Obj from "../object";

import Size from "./size";
import Axes from "./axes";
import Pie from "./pie";

import {option} from "../utils";

export default class OptionObject extends Obj {
    constructor(d, parent) {
        d = option(d, {});

        super(d, parent);

        this.size = new Size(d.size, this);

        this.handler = d.handler;

        this.axes = new Axes(d.axes, this);

        this.legend = option(d.legend, {});

        this.pie = new Pie(d.pie, this);
    }

    __init(d, parent){
        this.__ = {
            parent: parent,
            dirty: true
        };


    }

    copy(){
        return new OptionObject(this);
    }
}

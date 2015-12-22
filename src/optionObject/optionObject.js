
import Obj from "../object";
import Size from "./size";
import Axis from "./axis";

import {option} from "../utils";

export default class OptionObject extends Obj {
    constructor(d, parent) {
        d = option(d, {});

        super(d, parent);

        this.size = new Size(d.size, this);

        this.handler = d.handler;

        this.axis = new Axis(d.axis, this);

        this.legend = option(d.legend, {});
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


import Obj from "../object";
import Size from "./size";
import {option} from "../utils";

export default class OptionObject extends Obj {
    constructor(d, parent) {
        d = option(d, {});

        super(d, parent);

        this.handler = d.handler;
        this.axis = option(d.axis, {});
        this.legend = option(d.legend, {});
    }

    __init(d, parent){

        d.size = option(d.size, { def: true });

        let __ = this.__ = {
            legend: {},
            axis: {},
            chart: "#chart",
            parent: parent,
            dirty: true
        };

        this.size = new Size(d.size, this);

    }

    copy(){
        return new OptionObject(this);
    }
}

import {option} from "./utils";

export default class RenderObject {
    constructor(d){
        d = option(d, {});

        this.data = option(d.data, {});
        this.legend = option(d.legend, {});
        this.axes = option(d.axes, {});
        this.title = option(d.title, {});
    }

    copy(){
        return new RenderObject(this);
    }
}

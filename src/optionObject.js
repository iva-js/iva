import {option} from "./utils";

export default class OptionObject {
    constructor(d) {
        d = option(d, {});

        this.axis = option(d.axis, {});
        this.legend = option(d.legend, {});
    }

    copy(){
        return new OptionObject(this);
    }
}

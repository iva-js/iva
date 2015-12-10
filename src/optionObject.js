import {option} from "./utils";

class optionObject {
    constructor(d) {
        d = option(d, {});

        this.type = option(d.type, "column");
    }
}

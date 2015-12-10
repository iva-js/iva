import {option} from "./utils";

class dataObject{
    constructor(d) {
        d = option(d, {});

        this.columns = option(d.columns, []);
        this.rows = options(d.rows, []);
    }
}

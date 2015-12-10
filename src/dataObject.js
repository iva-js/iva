import {option} from "./utils";

export default class DataObject {
    constructor(d) {
        d = option(d, {});

        this.columns = option(d.columns, []);
        this.rows = option(d.rows, []);
    }

    copy(){
        return new DataObject(this);
    }
}

import {option, copy} from "../utils";

export default class DataObject {
    constructor(d) {
        d = option(d, {});
        this.__ = {
            columns: {
                values: [],
                dirty: true
            }
        };

    }

    copy(){
    }
}

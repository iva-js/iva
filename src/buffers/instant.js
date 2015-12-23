
import DefaultBuffer from "./default";

export default class InstantBuffer extends DefaultBuffer {
    constructor(chart){
        super(chart);
    }

    actOnDirty(dirty){
        let __ = this.__;

        if(dirty){
            this.sendRedraw();
        }
    }
}


/**
 * Class used for managing redraws.
 * Basic buffer doesn't do anything except marking itself as dirty
 */
export default class DefaultBuffer {
    constructor(chart){
        this.__init(chart);
    }

    __init(chart){
        this.__ = {
            dirty: false,
            chart: chart
        }
    }

    dirty(dirty){
        let __ = this.__;
        if(dirty === undefined){
            return __.dirty;
        }
        __.dirty = dirty;

        this.actOnDirty(dirty);
    }

    // Don't do anything
    actOnDirty(dirty){}
}

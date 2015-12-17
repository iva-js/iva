
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
            chart: chart,
            freeze: false
        }
    }

    dirty(dirty){
        let __ = this.__;
        if(dirty === undefined){
            return __.dirty;
        }
        __.dirty = dirty;

        if(!__.freeze){
            this.actOnDirty(dirty);
        }
    }

    /**
     * If frozen, buffer won't activate actOnDirty.
     * This is needed for chart initialization when 'dirty' happens all the time
     * but we don't need to redraw when initializing.
     */
    freeze(freeze){
        let __ = this.__;

        if(freeze === undefined){
            return __.freeze;
        }

        __.freeze = freeze;
    }

    // Don't do anything
    actOnDirty(dirty){}
}


/**
 * Class used for managing redraws.
 * Basic buffer doesn't do anything except marking itself as dirty
 */
export default class DefaultBuffer {
    constructor(){
        this.__init();
    }

    __init(){
        this.__ = {
            dirty: false
        }
    }

    dirty(dirty){
        let __ = this.__;
        if(dirty === undefined){
            return __.dirty;
        }
        __.dirty = dirty;
    }
}

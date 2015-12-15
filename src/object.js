
export default class Obj {
    constructor(d, parent){
        this.__init(d, parent);
    }

    __init(d){
        this.__ = {
            dirty: true,
            parent: {
                dirty: ()=>{}
            }
        };
    }

    dirty(d){
        let __ = this.__;
        if(d === undefined){
            return __.dirty;
        }
        __.dirty = d;
        if(d === true){
            __.parent.dirty(true);
        }
    }
}

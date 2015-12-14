
export default class Obj {
    constructor(d){
        this.__init(d);
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

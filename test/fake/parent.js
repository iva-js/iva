
export default class FakeParent {
    constructor(counter){
        this.counter = counter || { dirty : 0 };
    }

    dirty(){
        this.counter.dirty++;
    }
}

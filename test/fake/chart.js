
export default class FakeChart {
    constructor(counter){
        this.counter = counter;
    }

    redraw(){
        this.counter.count++;
    }
}

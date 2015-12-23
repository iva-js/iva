
import {expect} from "chai";

import InstantBuffer from "../../src/buffers/instant";

import FakeChart from "../fake/chart";

describe("InstanBuffer", ()=>{
    let buffer;
    let counter = {
        count: 0
    };

    beforeEach(()=>{
        counter.count = 0;
        let chart = new FakeChart(counter);
        buffer = new InstantBuffer(chart);
    });

    describe("actOnDirty", ()=>{
        it("should redraw chart exactly once", ()=>{
            for(let i = 1; i < 10; i++){
                buffer.dirty(true);
                expect(counter.count).to.equal(i);
            }
        });

        it("should not redraw when dirty set to false", ()=>{
            buffer.dirty(false);
            expect(counter.count).to.equal(0);
        });

        it("shouldn't redraw when frozen", ()=>{
            buffer.freeze(true);
            buffer.dirty(true);

            expect(counter.count).to.equal(0);

            buffer.freeze(false);
            buffer.dirty(true);

            expect(counter.count).to.equal(1);

            buffer.freeze(true);
            buffer.dirty(true);

            expect(counter.count).to.equal(1);
        });
    });

    // It is tested here since default chart has no way to actually redraw chart :P
    describe("registerChart", ()=>{
        it("should call redraw on all charts that were registered", ()=>{
            let counter2 = { count : 0 };
            buffer.registerChart(new FakeChart(counter2));
            buffer.dirty(true);

            expect(counter.count).to.equal(1);
            expect(counter2.count).to.equal(1);

            let counter3 = { count : 0 };
            buffer.registerChart(new FakeChart(counter3));
            buffer.dirty(true);

            expect(counter.count).to.equal(2);
            expect(counter2.count).to.equal(2);
            expect(counter3.count).to.equal(1);
        });
    });

    describe("unregisterChart", ()=>{
        it("should delete chart from queue", ()=>{
            let counter2 = { count : 0 };
            let chart2 = new FakeChart(counter2);

            buffer.registerChart(chart2);
            buffer.unregisterChart(chart2);
            buffer.dirty(true);

            expect(counter2.count).to.equal(0);
        });
    });
});

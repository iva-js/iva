
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
});

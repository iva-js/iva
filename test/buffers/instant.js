
import {expect} from "chai";
import {spy} from "sinon";

import InstantBuffer from "../../src/buffers/instant";

import FakeChart from "../fake/chart";

describe("InstanBuffer", ()=>{
    let buffer;
    let chart;

    beforeEach(()=>{
        chart = new FakeChart();

        spy(chart, "redraw");

        buffer = new InstantBuffer(chart);
    });

    describe("actOnDirty", ()=>{
        it("should redraw chart exactly once", ()=>{
            for(let i = 1; i < 10; i++){
                buffer.dirty(true);
                expect(chart.redraw.callCount).to.equal(i);
            }
        });

        it("should not redraw when dirty set to false", ()=>{
            buffer.dirty(false);
            expect(chart.redraw.callCount).to.equal(0);
        });

        it("shouldn't redraw when frozen", ()=>{
            buffer.frozen(true);
            buffer.dirty(true);

            expect(chart.redraw.callCount).to.equal(0);

            buffer.frozen(false);
            buffer.dirty(true);

            expect(chart.redraw.callCount).to.equal(1);

            buffer.frozen(true);
            buffer.dirty(true);

            expect(chart.redraw.callCount).to.equal(1);
        });
    });

    // It is tested here since default chart has no way to actually redraw chart :P
    describe("registerChart", ()=>{
        it("should call redraw on all charts that were registered", ()=>{
            let chart2 = new FakeChart();
            buffer.registerChart(chart2);
            spy(chart2, "redraw");

            buffer.dirty(true);

            expect(chart.redraw.callCount).to.equal(1);
            expect(chart2.redraw.callCount).to.equal(1);

            let chart3 = new FakeChart();
            spy(chart3, "redraw");

            buffer.registerChart(chart3);
            buffer.dirty(true);

            expect(chart.redraw.callCount).to.equal(2);
            expect(chart2.redraw.callCount).to.equal(2);
            expect(chart3.redraw.callCount).to.equal(1);
        });
    });

    describe("unregisterChart", ()=>{
        it("should delete chart from queue", ()=>{
            let chart2 = new FakeChart();
            spy(chart2, "redraw");

            buffer.registerChart(chart2);
            buffer.unregisterChart(chart2);
            buffer.dirty(true);

            expect(chart2.redraw.callCount).to.equal(0);
        });
    });
});

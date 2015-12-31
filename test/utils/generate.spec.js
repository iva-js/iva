
import {expect} from "chai";

import {generateValues} from "./generate";

describe("Test utils. Generate", ()=>{
    describe("generateValues", ()=>{

        it("should generate values of the same size", ()=>{
            let a1 = [1, 2, 3];
            let a2 = [3, 2, 1];

            let values = generateValues([a1, a2]);

            expect(values).to.deep.equal({
                values: [{
                    values: [{
                        y: 1,
                        x: 0,
                        y0: 0
                    }, {
                        y: 2,
                        x: 1,
                        y0: 0
                    }, {
                        y: 3,
                        x: 2,
                        y0: 0
                    }]
                }, {
                    values: [{
                        y: 3,
                        x: 0,
                        y0: 0
                    }, {
                        y: 2,
                        x: 1,
                        y0: 0
                    }, {
                        y: 1,
                        x: 2,
                        y0: 0
                    }]
                }]
            });
        });

        it("should generate values of the different sizes", ()=>{
            let a1 = [1, 2, 3];
            let a2 = [3, 2, 1, 0];
            let a3 = [3, 4];

            let values = generateValues([a1, a2, a3]);

            expect(values).to.deep.equal({
                values: [{
                    values: [{
                        y: 1,
                        x: 0,
                        y0: 0
                    }, {
                        y: 2,
                        x: 1,
                        y0: 0
                    }, {
                        y: 3,
                        x: 2,
                        y0: 0
                    }]
                }, {
                    values: [{
                        y: 3,
                        x: 0,
                        y0: 0
                    }, {
                        y: 2,
                        x: 1,
                        y0: 0
                    }, {
                        y: 1,
                        x: 2,
                        y0: 0
                    }, {
                        y: 0,
                        x: 3,
                        y0: 0
                    }]
                }, {
                    values: [{
                        y: 3,
                        x: 0,
                        y0: 0
                    }, {
                        y: 4,
                        x: 1,
                        y0: 0
                    }]
                }]
            });
        });

        it("should generate when xs are strings", ()=>{
            let values = generateValues([[
                { x: "a", y: 1 }, { x: "b", y: 2}
            ], [
                { x: "b", y: 3 }, { x: "c", y: 4 }
            ]]);

            expect(values).to.deep.equal({
                values: [{
                    values: [{
                        x: "a",
                        y: 1,
                        y0: 0 
                    }, {
                        x: "b",
                        y: 2,
                        y0: 0
                    }]
                }, {
                    values: [{
                        x: "b",
                        y: 3,
                        y0: 0
                    }, {
                        x: "c",
                        y: 4,
                        y0: 0
                    }]
                }]
            });
        });
    });
});

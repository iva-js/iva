
import {expect} from "chai";

import RenderObject from "../../src/renderObject/renderObject";

describe("Render object", ()=>{
    
    let render;

    let rectTypes = ["bars", "areas", "lines"];
    let circTypes = ["pies"];

    function checkRectDataCleared(){
        rectTypes.forEach(type => {
            expect(render.data.rectangular[type]).to.deep.equal(render.getDefaultStore());
        });
    }

    function checkCircularDataCleared(){
        circTypes.forEach(type => {
            expect(render.data.circular[type]).to.deep.equal(render.getDefaultStore());
        });
    }

    beforeEach(()=>{
        render = new RenderObject();
    });

    describe("init", ()=>{
        it("should properly init data", ()=>{
            checkRectDataCleared();
        });
    });

    describe("clear data", ()=>{
        it("should clear all data", ()=>{
            rectTypes.forEach(type => {
                render.data.rectangular[type] = { values: [1, 2, 3] };
            })
            
            circTypes.forEach(type => {
                render.data.circular[type] = { values: [1, 2, 3] };
            });

            render.clearData();

            checkRectDataCleared();
            checkCircularDataCleared();
        });

        it("should clear except given types", ()=>{
             rectTypes.forEach(type => {
                render.data.rectangular[type] = { values: [1, 2, 3] };
            })
            
            circTypes.forEach(type => {
                render.data.circular[type] = { values: [1, 2, 3] };
            });           

            render.clearRectangularData({
                bars: false,
                lines: false
            });

            render.clearCircularData({
                pies: false
            });

            expect(render.data.rectangular.areas).to.deep.equal(render.getDefaultStore());
            expect(render.data.rectangular.bars).to.deep.equal({ values: [1, 2, 3] });
            expect(render.data.rectangular.lines).to.deep.equal({ values: [1, 2, 3] });

            expect(render.data.circular.pies).to.deep.equal({ values: [1, 2, 3] });
        });
    });
});

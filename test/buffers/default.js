
import {expect} from "chai";

import DefaultBuffer from "../../src/buffers/default";

describe("DefaultBuffer", ()=>{
    let buffer;

    beforeEach(()=>{
        buffer = new DefaultBuffer();
    });

    describe("dirty", ()=>{
        it("should get dirty", ()=>{
            expect(buffer.dirty()).to.equal(false);
        });

        it("should set dirty", ()=>{
            buffer.dirty(true);
            expect(buffer.dirty()).to.equal(true);

            buffer.dirty(false);
            expect(buffer.dirty()).to.equal(false);
        });
    });

    describe("frozen", ()=>{
        it("should get frozen", ()=>{
            expect(buffer.frozen()).to.equal(false);
        });

        it("should set frozen", ()=>{
            buffer.frozen(true);
            expect(buffer.frozen()).to.equal(true);

            buffer.frozen(false);
            expect(buffer.frozen()).to.equal(false);
        });
    });


});

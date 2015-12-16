
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
});

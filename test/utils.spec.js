
import {expect} from "chai";

import {merge} from "../src/utils";

describe("utils", ()=>{
    describe("merge", ()=>{
        it("should merge two object", ()=>{
            let o1 = {
                a: 10,
                c: 20
            };

            let o2 = {
                a: 15,
                b: 5
            };

            expect(merge(o1, o2)).to.deep.equal({ a: 15, b: 5, c: 20 });
        });
    });
});

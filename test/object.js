
import {expect} from "chai";

import Obj from "../src/object";

import FakeParent from "./fake/parent";

describe("Object", ()=>{
    let obj;

    beforeEach(()=>{
        obj = new Obj({}, new FakeParent());
    });

    describe("field", ()=>{
        describe("get field", ()=>{
            it("should search upon basic query", ()=>{
                obj.__.fields = {
                    "a": 10,
                    "b": 5
                };

                expect(obj.field("a")).to.equal(10);
                expect(obj.field("b")).to.equal(5);
            });

            it("should search upon complex query", ()=>{
                obj.__.fields = {
                    "a": {
                        "b": {
                            "c" : 10
                        },
                        "d" : "hello"
                    }
                };

                expect(obj.field("a.b.c")).to.equal(10);
                expect(obj.field("a.d")).to.equal("hello");
            });

            it("should return object", ()=>{
                obj.__.fields = {
                    "a": {
                        "b": {
                            "c": "hello",
                            "d": 10
                        }
                    }
                };

                expect(obj.field("a.b")).to.deep.equal({ c: "hello", d: 10 });
            });

            it("should return undefined when not found", ()=>{
                expect(obj.field("a")).to.equal(undefined);
                expect(obj.field("a.b.")).to.equal(undefined);

                obj.field("a", 10);
                expect(obj.field("a.b")).to.equal(undefined);

                obj.field("b.c", 5);
                expect(obj.field("b.a")).to.equal(undefined);
            });
        });

        describe("set field", ()=>{
            it("should set with basic query", ()=>{
                obj.field("a", 10);
                obj.field("b", "hello");

                expect(obj.field("a")).to.equal(10);
                expect(obj.field("b")).to.equal("hello");
            });

            it("should set with complex query", ()=>{
                obj.field("a.b.c", 10);
                obj.field("a.b.d", 5);
                obj.field("a.c", 7);

                expect(obj.field("a.b.c")).to.equal(10);
                expect(obj.field("a.b.d")).to.equal(5);
                expect(obj.field("a.c")).to.equal(7);
            });

            it("should set complex object", ()=>{
                obj.field("a.b", [1, 2, 3]);
                obj.field("a.c", { d: { e : 5} });

                expect(obj.field("a.b")).to.deep.equal([1, 2, 3]);
                expect(obj.field("a.c")).to.deep.equal({ d: { e: 5 } });
                expect(obj.field("a.c.d")).to.deep.equal({ e: 5 });
            });

            it("should throw when setting to non-object value", ()=>{
                obj.field("a.b", 10);

                expect(()=>{
                    obj.field("a.b.c", 5);
                }).to.throw(new RegExp(/non-object field/g));
            });
        });
    });
});

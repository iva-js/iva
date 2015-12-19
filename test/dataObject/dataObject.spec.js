
import {expect} from "chai";

import DataObject from "../../src/dataObject/dataObject";

import FakeParent from "../fake/parent";

describe("Data object", ()=>{
    let data, anotherData;

    let counter = {
        dirty: 0
    };

    describe("/columns", ()=>{
        beforeEach(()=>{
            counter.dirty = 0;

            data = new DataObject({
                columns: [{
                    id: "data1",
                    values: [
                        10, 20, 30
                    ]
                }, {
                    id: "data2",
                    values: [
                        30, 40, 50
                    ]
                }]
            }, new FakeParent(counter));
        });

        function checkColumn(column, id, values){
            expect(column.id).to.equal(id);
            expect(column.values).to.deep.equal(values);
        }

        describe("columns", ()=>{

            it("should get columns", ()=>{
                let columns = data.columns();

                checkColumn(columns[0], "data1", [{ y: 10 }, { y: 20 }, { y: 30 }]);
                checkColumn(columns[1], "data2", [{ y: 30 }, { y: 40 }, { y: 50 }]);

            });

            it("should set columns", ()=>{
                data.columns([{
                    id: "data3",
                    values: [1, 2, 3]
                }, {
                    id: "data4",
                    values: [3, 2, 1]
                }]);

                let columns = data.columns();

                expect(columns.length).to.equal(2);
                checkColumn(columns[0], "data3", [{ y: 1 }, { y: 2 }, { y: 3 }]);
                checkColumn(columns[1], "data4", [{ y: 3 }, { y: 2 }, { y: 1 }]);
            });

        });

        describe("addColumns", ()=>{
            it("should add columns", ()=>{
                data.addColumns([{
                    id: "data3",
                    values: [1, 2, 3]
                }, {
                    id: "data4",
                    values: [3, 2, 1]
                }]);

                let columns = data.columns();

                checkColumn(columns[2], "data3", [{ y: 1 }, { y: 2 }, { y: 3 }]);
                checkColumn(columns[3], "data4", [{ y: 3 }, { y: 2 }, { y: 1 }]);
            });
        });

        describe("addColumn", ()=>{
            it("should add column", ()=>{
                data.addColumn({
                    id: "data3",
                    values: [1, 2, 3]
                });

                let columns = data.columns();

                checkColumn(columns[2], "data3", [{ y: 1 }, { y: 2 }, { y: 3 }]);
            });

            it("should throw if column with id already exists", ()=>{
                expect(()=>{
                    data.addColumn({ id: "data1" });
                }).to.throw(Error);
            });
        });

        describe("addValuesToColumn", ()=>{
            it("should add values", ()=>{
                data.addValuesToColumn("data1", [100, 90, 80]);

                let columns = data.columns();

                checkColumn(columns[0], "data1", [{ y: 10 }, { y: 20 }, { y: 30 }, { y: 100 }, { y: 90 }, { y: 80 }]);
            });
        });

        describe("addValueToColumn", ()=>{
            it("should add value", ()=>{
                data.addValueToColumn("data1", 10);
                checkColumn(data.columns()[0], "data1", [{ y: 10 }, { y: 20 }, { y: 30}, { y: 10 }]);
            });
        });
    });
});

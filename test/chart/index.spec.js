import {expect} from "chai";

import {Chart, DataObject, OptionObject, buffers} from "../../src/index";

describe("basic", ()=>{
    it("should just init and redraw", ()=>{
        let buffer = new buffers.DefaultBuffer();
        let dataObject = new DataObject({}, buffer);
        let optionObject = new OptionObject({}, buffer);
        let chart = new Chart(dataObject, optionObject);

        expect(()=>{
            chart.redraw();
        }).to.not.throw();

    });
});

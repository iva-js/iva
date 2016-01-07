
import DataObject from "./dataObject/dataObject";
import OptionObject from "./optionObject/optionObject";

import Chart from "./chart";

import DefaultBuffer from "./buffers/default";
import InstantBuffer from "./buffers/instant";

import {INTERPOLATE, MODE} from "./constants";

let Buffer = {
    Default: DefaultBuffer,
    Instant: InstantBuffer
};

export function generateBasicChart(bindTo){
    var buffer = new Buffer.Default()
    var data = new DataObject({}, buffer);
    var option = new OptionObject({}, buffer);
    var chart = new Chart({
        dataObject: data,
        optionObject: option,
        buffer: buffer,
        bindTo: bindTo
    });

    return chart;
}

export function generateInstantChart(bindTo){
    var buffer = new Buffer.Instant()
    var data = new DataObject({}, buffer);
    var option = new OptionObject({}, buffer);
    var chart = new Chart({
        dataObject: data,
        optionObject: option,
        buffer: buffer,
        bindTo: bindTo
    });

    return chart;
}

export { DataObject as DataObject };
export { OptionObject as OptionObject };

export { Chart as Chart };

export { Buffer as Buffer };

export { INTERPOLATE as INTERPOLATE };
export { MODE as MODE }

import DataObject from "./dataObject/dataObject";
import OptionObject from "./optionObject/optionObject";

import Chart from "./chart";

import DefaultBuffer from "./buffers/default";
import InstantBuffer from "./buffers/instant";

let Buffer = {
    Default: DefaultBuffer,
    Instant: InstantBuffer
};

export function generateBasicChart(){
    var buffer = new Buffer.Default()
    var data = new DataObject({}, buffer);
    var option = new OptionObject({}, buffer);
    var chart = new Chart(data, option);

    return chart;
}

export { DataObject as DataObject };
export { OptionObject as OptionObject };

export { Chart as Chart };

export { Buffer as Buffer };

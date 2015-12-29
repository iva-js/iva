/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.Buffer.Instant()

var dataObject = new Iva.DataObject({
    columns: [{
        id: "data1",
        values: [{ x: "day1", y: 10 }, { x: "day2", y: 20 }, { x: "day3", y: -10 }]
    }, {
        id: "data2",
        values: [{ x: "day1", y: 10}, { x: "day2", y: 15 }, { x: "day4", y: 10 }]
    }] 
}, buffer);

var optionObject = new Iva.OptionObject({
    handler: "line",
    axes:{
        both:{
            visible: true
        }
    }
}, buffer);

var chart = new Iva.Chart(dataObject, optionObject, buffer);
chart.redraw();

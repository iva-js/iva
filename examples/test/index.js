/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.Buffer.Instant()

var dataObject = new Iva.DataObject({
    columns: [{
        id: "data1",
        values: [1, 2, 3, 4]
    }, {
        id: "data2",
        values: [4, 2, 2, 4]
    }, {
        id: "data3", 
        values: [5, 1, 4, 3]
    }] 
}, buffer);

var optionObject = new Iva.OptionObject({
    handler: "area",
    axes:{
        both:{
            visible: true
        }
    },
    area: {
        points: true
    }
}, buffer);

var chart = new Iva.Chart(dataObject, optionObject, buffer);
chart.redraw();

/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.Buffer.Default()

var dataObject = new Iva.DataObject({
    columns: [
        {
            id: "data1",
            values: [5, 3, 1, 4, 10]
        }, {
            id: "data2",
            values: [-5, 3, 1, 4, 0]
        }
    ]
        
       
}, buffer);

var optionObject = new Iva.OptionObject({
    handler: "line",
    axes: {
        both: {
            visible: true
        }
    }
}, buffer);

var chart = new Iva.Chart(dataObject, optionObject);
chart.redraw();


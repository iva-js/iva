/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.Buffer.Default()

var dataObject = new Iva.DataObject({
    columns: [{
        id: "pie1",
        values: [
            {
                y: 10,
                x: "data1"
            }, {
                y: 4,
                x: "data2"
            }, {
                y: 5,
                x: "data3"
            }
        ]
    }]
        
       
}, buffer);

var optionObject = new Iva.OptionObject({
    handler: "pie",
    pie: {
        innerRadius: 50
    }
}, buffer);

var chart = new Iva.Chart(dataObject, optionObject);
chart.redraw();


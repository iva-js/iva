/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var dataObject = new iva.DataObject();
var optionObject = new iva.OptionObject();
var chart = new iva.Chart(dataObject, optionObject);
chart.redraw();

setTimeout(function(){
    dataObject.columns[0].values[0].y = 20;
    chart.redraw();
});

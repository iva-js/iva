import d3 from "d3";
import _ from "underscore";

import Renderer from "../renderer";

export default class SvgRenderer extends Renderer {

    constructor(chart){
        super();
        this.option = chart.option;
        let bindTo = this.option.bindTo;

        this.easel = d3.select("#chart");

        this.easel.append("g").attr("transform", "translate(0, 0)");

        this.color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    }

    redraw(renderObject){
        this.render = renderObject;
        this.data = this.render.data;
        this.option = this.render.option;

        this.setSizes();

        this.redrawColumns();
    }

    setSizes(){
        this.easel.attr("width", this.option.size.width).attr("height", this.option.size.height);

        let x0 = this.x0 = d3.scale.ordinal().rangeRoundBands([0, this.option.size.width], 0.1);
        this.x1 = d3.scale.ordinal().rangeRoundBands([0, x0.rangeBand()]);

        this.y = d3.scale.linear().range([this.option.size.height, 0]);

    }

    redrawColumns(){
        let easel = this.easel, x0 = this.x0, x1 = this.x1, y = this.y, color = this.color;

        let columns = this.data.columns.values;

        x0.domain(columns.map(column => column.id));
        x1.domain(d3.range(d3.max(columns, column => column.values.length)));
        y.domain([0, d3.max(columns, column => d3.max(column.values, value => value.y))]);

        let column = easel.selectAll(".column")
            .data(columns)
          .enter().append("g")
            .attr("class", "column")
            .attr("transform", d => `translate(${x0(d.id)},0)`);  

        column.selectAll("rect")
            .data(d => d.values)
          .enter().append("rect")
            .attr("width", x1.rangeBand())
            .attr("x", d => x1(d.x))
            .attr("y", d => y(d.y))
            .attr("height", d => this.option.size.height - y(d.y))
            .style("fill", d => color(d.x));

    }
}

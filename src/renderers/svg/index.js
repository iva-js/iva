import d3 from "d3";

import Renderer from "../renderer";

export default class SvgRenderer extends Renderer {

    constructor(chart){
        super();
        this.option = chart.option;
        let bindTo = this.option.bindTo;

        this.easel = d3.select(bindTo);

        this.easel.append("g").attr("transform", "translate(0, 0)");

        this.x = d3.scale.ordinal().rangeRoundBands([0, this.option.width], 0.1);
        this.y = d3.scale.linear().range([this.option.height, 0]);
    }

    redraw(renderObject){
        this.render = renderObject;
        this.data = this.render.data;
        this.option = this.render.option;

        this.setSizes();

        }

    setSizes(){
        this.easel.attr("width", this.option.width).attr("height", this.option.height);
    }

    redrawColumns(){
        this.x.domain(this.data.columns[0].values.map(d => d.x));
        this.y.domain([0, d3.max(this.data.columns[0].values, d => d.y)]);

        this.easel.selectAll(".bar")
            .data(this.data.columns[0].values)
          .enter().append("rect")
            .attr("class", ".bar")
            .attr("x", d => this.x(d.x))
            .attr("y", d => this.y(d.y))
            .attr("height", d => this.option.height - this.y(d.y))
            .attr("width", this.x.rangeBand());

    }
}

import d3 from "d3";
import _ from "underscore";

import Renderer from "../renderer";

export default class SvgRenderer extends Renderer {

    constructor(chart){
        super();
        this.option = chart.option;
        let bindTo = this.option.bindTo;

        this.easel = d3.selectAll("#chart");
        this.easel.append("g").attr("transform", "translate(0, 0)");

        this.color = d3.scale.ordinal().range(["#98abc5", "#a05d56", "#7b6888", "#6b486b", "#8a89a6", "#d0743c", "#ff8c00"]);
    }

    redraw(renderObject){
        this.render = renderObject;
        this.data = this.render.data;
        this.option = this.render.option;

        this.setSizes();

        //this.redrawColumns();
        this.redrawLines();
    }

    setSizes(){
        this.easel.attr("width", this.option.size.width).attr("height", this.option.size.height);

        this.x = d3.scale.linear().range([0, this.option.size.width]);

        this.y = d3.scale.linear().range([this.option.size.height, 0]);

    }

    redrawColumns(){
        let easel = this.easel, x0 = this.x0, x1 = this.x1, y = this.y, color = this.color;

        if(!this.data.columns && !this.data.rows){
            return;
        }

        let columns = this.data.columns.values;
        let rows = this.data.rows.values;

        x0.domain(rows.map(row => row.x));
        x1.domain(d3.range(d3.max(columns, column => column.values.length)));
        y.domain([0, d3.max(columns, column => d3.max(column.values, value => value.y))]);

        let rowsSvg = easel.selectAll(".row")
            .data(rows)
          .enter().append("g")
            .attr("class", "row")
            .attr("transform", d => `translate(${x0(d.x)},0)`);  

        rowsSvg.selectAll("rect")
            .data(d => d.values)
          .enter().append("rect")
            .attr("width", x1.rangeBand())
            .attr("x", d => x1(d.x))
            .attr("y", d => y(d.y))
            .attr("height", d => this.option.size.height - y(d.y))
            .style("fill", d => color(d.x));

    }

    redrawLines(){
        let easel = this.easel, color = this.color, x = this.x, y = this.y;

        let lines = this.data.lines.values;

        if(!lines){
            return;
        }

        let xMin = d3.min(lines, line => d3.min(line.values, value => value.x));
        let xMax = d3.max(lines, line => d3.max(line.values, value => value.x));

        let yMin = d3.min(lines, line => d3.min(line.values, value => value.y));
        let yMax = d3.max(lines, line => d3.max(line.values, value => value.y));

        x.domain([xMin, xMax]);
        y.domain([yMin, yMax]);

        color.domain(lines.map(line => line.id));

        let lineSvg = d3.svg.line()
            .x(d => {
                return x(d.x);
            })
            .y(d => {
                return y(d.y);
            })
            .interpolate("basis");

        let linesSvg = easel.selectAll(".lines")
            .data(lines)
          .enter().append("g")
            .attr("class", "lines");

        linesSvg.append("path")
            .attr("class", "line")
            .attr("d", d => lineSvg(d.values))
            .attr("stroke", d => color(d.id))
            .attr("stroke-width", 2)
            .attr("fill", "none");

    }
}

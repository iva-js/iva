import d3 from "d3";

import Renderer from "../renderer";
import {PADDING, AXIS} from "./constants";

import {isUndefined, isEmpty, debug} from "../../utils";
import {generateExplode, visibility} from "./svgUtils";

export default class SvgRenderer extends Renderer {

    constructor(chart){
        super();
        this.option = chart.option;
        let bindTo = this.option.bindTo;

        this.easel = d3.selectAll("#chart").attr("class", "iva-chart");;
        this.easel.append("g").attr("transform", "translate(0, 0)");

        this.initLines();
        this.initAreas();

        this.initPies();

        this.color = d3.scale.ordinal().range(["#98abc5", "#a05d56", "#7b6888", "#6b486b", "#8a89a6", "#d0743c", "#ff8c00"]);

        this.initAxes();
    }

    redraw(renderObject){
        this.render = renderObject;
        this.data = this.render.data;
        this.option = this.render.option;

        this.setSizes();
        this.setDomainsToScales();

        //this.redrawColumns();
        this.redrawLines();
        this.redrawAreas();
        this.redrawPies();

        this.redrawAxes();
    }

    initLines(){
        this.easel.append("g").attr("class", "lines");
    }

    initAreas(){
        this.easel.append("g").attr("class", "areas");
    }

    initPies(){
        this.easel.append("g").attr("class", "pies");
    }

    initAxes(){
        let easel = this.easel;

        let xAxis = this.xAxis = d3.svg.axis().orient("bottom");
        let yAxis = this.yAxis = d3.svg.axis().orient("left");
    
        easel.append("g")
            .attr("class", "axis xAxis");

        easel.append("g")
            .attr("class", "axis yAxis");
    }

    setSizes(){
        let easel = this.easel, size = this.option.size;

        let innerSize = this.innerSize = {
            width: size.width - PADDING.LEFT - PADDING.RIGHT,
            height: size.height - PADDING.TOP - PADDING.BOTTOM
        };

        this.easel.attr("width", size.width).attr("height", size.height);

        let xScale = this.xScale = d3.scale.ordinal().rangePoints([0, innerSize.width - AXIS.WIDTH]);

        let yScale = this.yScale = d3.scale.linear().range([innerSize.height - AXIS.WIDTH, 0]);

    }

    setDomainsToScales(){
        let {xMin, xMax, yMin, yMax, xStrings} = this.data.ranges;
        let xScale = this.xScale, yScale = this.yScale;

        if(!isEmpty(xStrings)){
            xScale.domain(xStrings);
        } else {
            xScale.domain(d3.range(xMin, xMax+1));
        }
        yScale.domain([yMin, yMax]);

    }

    redrawAxes(){
        let easel = this.easel, size = this.option.size, axes = this.option.axes, xAxis = this.xAxis, yAxis = this.yAxis;

        xAxis.scale(this.xScale);
        yAxis.scale(this.yScale);

        easel.select(".xAxis")
            .attr("transform", `translate(${AXIS.WIDTH + PADDING.LEFT}, ${size.height - AXIS.WIDTH})`)
            .style("opacity", d => (axes.x.visible) ? 100 : 0)
            .call(xAxis);

        easel.select(".yAxis")
            .attr("transform", `translate(${AXIS.WIDTH}, ${PADDING.TOP})`)
            .style("opacity", d => (axes.y.visible) ? 100 : 0)
            .call(yAxis);

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
        let easel = this.easel, color = this.color, xScale = this.xScale, yScale = this.yScale;

        if(isEmpty(this.data.rectangular.lines.values)){
            return;
        }

        let lines = this.data.rectangular.lines.values;

        color.domain(lines.map(line => line.id));

        let line = d3.svg.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .interpolate("basis");

        let linesSvg = easel.select(".lines");

        let lineSvg = linesSvg.selectAll("path").data(lines);

        lineSvg.enter().append("path")
            .attr("class", "line")
            .attr("transform", `translate(${PADDING.LEFT + AXIS.WIDTH}, 0)`)
            .attr("stroke", d => color(d.id))
            .attr("stroke-width", 2)
            .attr("fill", "none");

        lineSvg.attr("d", d => line(d.values))

        lineSvg.exit().remove();    
    }

    redrawAreas(){
        let easel = this.easel, color = this.color, xScale = this.xScale, yScale = this.yScale;

        if(isEmpty(this.data.rectangular.areas.values)){
            return;
        }

        let areas = this.data.rectangular.areas.values;

        color.domain(areas.map(area => area.id));

        let area = d3.svg.area()
            .x(d => xScale(d.x))
            .y0(this.innerSize.height - AXIS.WIDTH)
            .y1(d => yScale(d.y))
            .interpolate("basis");

        let areasSvg = easel.select(".areas");

        let areaSvg = areasSvg.selectAll("path").data(areas);

        areaSvg.enter().append("path")
            .attr("class", "area")
            .attr("transform", `translate(${PADDING.LEFT + AXIS.WIDTH}, ${PADDING.TOP})`)
            .attr("class", "area")
            .attr("stroke", d => color(d.id))
            .attr("fill", d => color(d.id));

        areaSvg.attr("d", d => area(d.values));

        areaSvg.exit().remove();

    }

    redrawPies(){
        let easel = this.easel, color = this.color, option = this.option;

        if(isEmpty(this.data.circular.pies.values)){
            return;
        }

        let pies = this.data.circular.pies.values;

        let pie = pies[0].values;
        color.domain(pie.map(value => value.x));

        let arcSvg = d3.svg.arc()
            .outerRadius(option.pie.outerRadius)
            .innerRadius(option.pie.innerRadius)
            .startAngle(d => d.startAngle + option.pie.turnAngle)
            .endAngle(d => d.endAngle + option.pie.turnAngle)
            .padAngle(option.pie.padAngle);

        let pieLayout = d3.layout.pie()
            .sort(null)
            .value(d => d.y);

        easel.selectAll(".pies").attr("transform", `translate(${this.option.size.width/2}, ${this.option.size.height/2})`);
        let p = easel.selectAll(".pies").selectAll(".arc").data(pieLayout(pie));

        p.enter().append("path")
            .attr("class", "arc")
            .style("fill", d => color(d.data.id));
        
        p.attr("d", arcSvg);
        p.attr("transform", generateExplode(option.pie.explodeRadius))

        p.exit().remove();    

    }

}

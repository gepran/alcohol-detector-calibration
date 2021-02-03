var data = [[500,2.5], [1000,3], [1500,3], [2000,3.3], [3000,3.6], [4000,4], [5500,4.8], [6000,5], [7000,5], [8000,5.5], [9000,6], [12000,7], [14000,8], [15000,8], [18000,9], [20000,10], [21000,10], [24000,11], [28000,12], [30000,13], [50000,18]];
   
var margin = {top: 20, right: 80, bottom: 30, left: 50}
    , width = 960 - margin.left - margin.right
    , height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
        .domain([0, d3.max(data, function(d) { return d[0]; })])
        .range([ 0, width ]);

var y = d3.scale.linear()
        .domain([0, d3.max(data, function(d) { return d[1]; })])
        .range([ height, 0 ]);

var chart = d3.select('body')
.append('svg:svg')
.attr('width', width + margin.right + margin.left)
.attr('height', height + margin.top + margin.bottom)
.attr('class', 'chart')

var main = chart.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
.attr('width', width)
.attr('height', height)
.attr('class', 'main')   
    
// draw the x axis
var xAxis = d3.svg.axis()
.scale(x)
.orient('bottom');

main.append('g')
.attr('transform', 'translate(0,' + height + ')')
.attr('class', 'main axis date')
.call(xAxis);

// draw the y axis
var yAxis = d3.svg.axis()
.scale(y)
.orient('left');

main.append('g')
.attr('transform', 'translate(0,0)')
.attr('class', 'main axis date')
.call(yAxis);

var g = main.append("svg:g"); 

g.selectAll("scatter-dots")
    .data(data)
    .enter().append("svg:circle")
    .attr("cx", function (d,i) { return x(d[0]); } )
    .attr("cy", function (d) { return y(d[1]); } )
    .attr("r", 8);

//do trend analysis
var linReg = regression('linear', data);
var polyReg = regression('polynomial', data, 2);
var expoReg = regression('exponential', data);
var powReg = regression('power', data);
var logReg = regression('logarithmic', data);

var linRegEq = "Lin: y = " + linReg.equation[0].toFixed(4) + "x + " + linReg.equation[1].toFixed(2) + ", r2 = " + linReg.r2.toFixed(3);
var polyRegEq = "Poly: y = " + polyReg.equation[2].toFixed(4) + "x^2 + " + polyReg.equation[1].toFixed(4) + "x + " + polyReg.equation[0].toFixed(2) + ", r2 = " + polyReg.r2.toFixed(3);
var expoRegEq = "Exp: y = " + expoReg.equation[0].toFixed(4) + "e^(" + expoReg.equation[1].toFixed(4) + "x), r2 = " + expoReg.r2.toFixed(3);
var powRegEq = "Pow: y = " + powReg.equation[0].toFixed(4) + "x^" + powReg.equation[1].toFixed(2) + ", r2 = " + powReg.r2.toFixed(3);
var logRegEq = "Log: y = " + logReg.string + ", r2 = " + logReg.r2.toFixed(3);
var allEqs = "Trends: " + linRegEq + "; " + polyRegEq + "; " + expoRegEq + "; " + powRegEq + "; " + logRegEq;

var color = d3.scale.category20();
var coloredLines = ["linear", "polynomial", "exponential", "power", "logarithmic"];
color.domain(coloredLines);
var regressionLinesToPlot = color.domain().map(function(name) {
return {
    name: name,
    values: function() {
    var extrapolatedPts = [];
    for(var i = 0; i < data.length; i++){
        var val = data[i][0];
        switch(name){
        case "polynomial":
            extrapolatedPts.push({x: val, y: polyReg.equation[2] * Math.pow(val,2) + polyReg.equation[1] * val + polyReg.equation[0]});
            break;
        case "exponential":
            extrapolatedPts.push({x: val, y: expoReg.equation[0] * Math.exp(val * expoReg.equation[1])}); //or use numbers.js per https://gist.github.com/zikes/4279121, var regression = numbers.statistic.exponentialRegression(pts);
            break;
        case "power":
            extrapolatedPts.push({x: val, y: powReg.equation[0] * Math.pow(val,powReg.equation[1])});
            break;
        case "logarithmic":
            extrapolatedPts.push({x: val, y: logReg.equation[0] + logReg.equation[1] * Math.log(val)});
            break;
        case "linear":
        default:
            extrapolatedPts.push({x: val, y: linReg.equation[0] * val + linReg.equation[1]});
        }
    }
    return extrapolatedPts;
    }()
};
});

var line = d3.svg.line()
      .interpolate("basis")
      .x(function(d) { return x(d.x); })
      .y(function(d) { return y(d.y); });
      
var plotFields = main.selectAll(".lines-to-plot")
    .data(regressionLinesToPlot)
    .enter().append("g")
    .attr("class", "lines-to-plot");

plotFields.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .attr("data-legend", function(d) { return d.name})
      .style("stroke", function(d) { return color(d.name); })
      .style("stroke-width", "1.5px")
      .style("fill", "none");

plotFields.append("text")
    .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
    .attr("transform", function(d) { return "translate(" + x(d.value.x) + "," + y(d.value.y) + ")"; })
    .attr("x", 3)
    .attr("dy", ".35em")
    .text(function(d) { return d.name; });

var legend = main.append("g")
    .attr("class","legend")
    .attr("transform","translate(50,30)")
    .style("font-size","12px")
    .call(d3.legend);

var regLineInfo = main.append("g")
    .attr("class","legend")
    .attr("transform","translate(20,0)")
    .style("font-size","8px")
    .append("text")
    .text(function() { return allEqs; });
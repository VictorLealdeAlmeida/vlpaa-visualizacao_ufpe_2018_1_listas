var months = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"]


var margin = {top: 30, right: 30, bottom: 30, left: 30},
    width = 760 - margin.left - margin.right,
    height = 360 - margin.top - margin.bottom;


var svgC = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 
//eixo x

var axisScaleX = d3.scaleBand()
.domain(months)
.range([0, width]);

var xAxis = d3.axisBottom(axisScaleX);

var xAxisGroup = svgC.append("g")
.attr("transform", "translate(0," + height + ")")
.call(xAxis);

//eixo y

var axisScaleY = d3.scaleLinear()
.domain([1,100])
.range([height, 0]);

var yAxis = d3.axisLeft(axisScaleY)

var yAxisGroup = svgC.append("g")
.call(yAxis);

//Line

var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];


var lineGraph = svgC.append("path")
                        .attr("d", lineFunction(lineData))
                        .attr("stroke", "blue")
                        .attr("stroke-width", 2)
                        .attr("fill", "none");


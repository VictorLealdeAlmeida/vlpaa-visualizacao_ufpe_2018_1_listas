var months = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"]


var margin = {top: 30, right: 30, bottom: 30, left: 30},
    width = 760 - margin.left - margin.right,
    height = 360 - margin.top - margin.bottom;

/*
//ranges
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);


var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(5);
var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(5);


var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");    */


var svg = d3.select("body").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 
//eixo x

var axisScaleX = d3.scaleBand()
.domain(months)
.range([0, width]);

var xAxis = d3.axisBottom(axisScaleX);

var xAxisGroup = svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(xAxis);

//eixo y

var axisScaleY = d3.scaleLinear()
.domain([1,100])
.range([height, 0]);

var yAxis = d3.axisLeft(axisScaleY)

var yAxisGroup = svg.append("g")
.call(yAxis);






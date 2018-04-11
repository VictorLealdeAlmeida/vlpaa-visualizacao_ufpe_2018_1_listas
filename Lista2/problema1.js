var temperature ={
        "RecordHigh":[34.2, 34.7, 33.5, 31.4, 29.7, 28.6, 29.3, 33.0, 35.2, 34.5, 35.3, 33.5],
        "DailyMean": [22.1, 22.4, 21.8, 19.7, 17.4, 16.3, 15.8, 17.1, 17.9, 19.0, 20.2, 21.1],
        "RecordLow": [11.9, 12.4, 12.0, 6.8, 3.7, 4.2, 0.8, 3.4, 3.5, 7.0, 7.0, 10.3]
        }

var tMaxMin = temperature.RecordHigh.concat(temperature.RecordLow)

var margin = {top: 20, right: 50, bottom: 50, left: 50},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(10);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(8);

// Define the line
var valueline = d3.svg.line()
    .x(function(d,index) {

    if (index < 12){
        return (width/11)*index;
    }else{
        return (width/11)*(11 - (index % 12));
    } 

    })
    .y(function(d) { return y(d); });
    
// Adds the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

    // Scale the range of the data
x.domain(d3.extent(tMaxMin, function(d,index) { 

    if (index < 12){
        return index;
    }

    }));
y.domain([0, d3.max(tMaxMin, function(d) { console.log(d) 
    return d; })]);


    // Add the valueline path.
svg.append("path")
    .attr("class", "line")
    .attr("d", valueline(tMaxMin));

    // Eixo X
svg.append("g")
        //.attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")  
        .attr("ss")
            
            

    // Eixo Y
svg.append("g")
       // .attr("class", "y axis")
    .call(yAxis);


















/*var months = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"]


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

// Scale the range of the data
//    x.domain(d3.extent(temperature.RecordHigh, function(d, index) { return 40 * index; }));
 //   y.domain([0, d3.max(temperature.RecordHigh, function(d) { return d; })]);

//eixo y

var axisScaleY = d3.scaleLinear()
.domain([1,40])
.range([height, 0]);

var yAxis = d3.axisLeft(axisScaleY)

var yAxisGroup = svgC.append("g")
.call(yAxis);

//Line

var temperature ={
"RecordHigh":[height - 34.2, 34.7, 33.5, 31.4, 29.7, 28.6, 29.3, 33.0, 35.2, 34.5, 35.3, 33.5],
"DailyMean": [22.1, 22.4, 21.8, 19.7, 17.4, 16.3, 15.8, 17.1, 17.9, 19.0, 20.2, 21.1],
"RecordLow": [11.9, 12.4, 12.0, 6.8, 3.7, 4.2, 0.8, 3.4, 3.5, 7.0, 7.0, 10.3]
}

var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

var lineFunction = d3.line()
                        .x(function(d, index) { 
                            return 40 * index; })
                        .y(function(d) { 
                            return d; });

var lineGraph = svgC.append("path")
                        .attr("d", lineFunction(temperature.RecordHigh))
                        .attr("stroke", "blue")
                        .attr("stroke-width", 2)
                        .attr("fill", "none")
                     
*/

var temperature ={
        "RecordHigh":[34.2, 34.7, 33.5, 31.4, 29.7, 28.6, 29.3, 33.0, 35.2, 34.5, 35.3, 33.5],
        "DailyMean": [22.1, 22.4, 21.8, 19.7, 17.4, 16.3, 15.8, 17.1, 17.9, 19.0, 20.2, 21.1],
        "RecordLow": [11.9, 12.4, 12.0, 6.8, 3.7, 4.2, 0.8, 3.4, 3.5, 7.0, 7.0, 10.3]
        }

var tMaxMin = (temperature.RecordHigh.concat(temperature.RecordLow)).concat(temperature.RecordHigh[0])
months = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"]

var margin = {top: 20, right: 50, bottom: 50, left: 50},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Define the axes
var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);



// Area de max e min
var valueline = d3.line()

var areaL = valueline
    .x(function(d,index) {

    if (index < 12){
        return (width/11)*index;
    }else if(index < 24){
        return (width/11)*(11 - (index % 12));
    }else{
        return 0;
    } 

    })
    .y(function(d) { return y(d); });

//Linha da media


    
// SVG Canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

x.domain(d3.extent(tMaxMin, function(d,index) { 

    if (index < 12){
        return index;
    }

    }));
y.domain([0, d3.max(tMaxMin, function(d) { console.log(d) 
    return d; })]);


svg.append("path")
    .attr("fill", "#FB8183")
    .attr("stroke", "#FB8183")
    .attr("d", valueline(tMaxMin));

svg.append("path")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 4)
    .attr("d", valueline(temperature.DailyMean));

    // Eixo X
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")  
        .attr("ss")
            
    // Eixo Y
svg.append("g")
    .call(yAxis)










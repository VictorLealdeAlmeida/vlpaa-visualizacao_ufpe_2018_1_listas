
var tMaxMin = (temperature.RecordHigh.concat(temperature.RecordLow)).concat(temperature.RecordHigh[0])
months = ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"]

var margin = {top: 20, right: 50, bottom: 50, left: 50},
    width = 1200 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleBand().range([0, width]).paddingInner(1);
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

x.domain(months)
/*x.domain(d3.extent(tMaxMin, function(d,index) { 

    if (index < 12){
        return index;
    }

    }));*/
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
    .selectAll("text");
            
    // Eixo Y
svg.append("g")
    .call(yAxis)











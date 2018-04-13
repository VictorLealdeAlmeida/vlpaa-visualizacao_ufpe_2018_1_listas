
months = ["Gol","Tam","Azul"]

var qtdVoos = [{key: "Gol", value: 0}, {key: "Tam", value: 0}, {key: "Azul", value: 0}]


contaVoos()

function contaVoos(){
    for (var i = 0; i < trips.length; i++) {
        if (trips[i].carrier == "Gol"){
            qtdVoos[0].value++
        }else if (trips[i].carrier == "Tam"){
            qtdVoos[1].value++
        }else if (trips[i].carrier == "Azul"){
            qtdVoos[2].value++
        }
    }
}


var margin = {top: 20, right: 50, bottom: 50, left: 50},
    width = 500 - margin.left - margin.right,
    height = 670 - margin.top - margin.bottom;

// Ranges
var x = d3.scaleBand().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y);



    
// SVG Canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

x.domain(months)
y.domain([0, d3.max([qtdVoos[0].value, qtdVoos[1].value, qtdVoos[2].value], function(d) { console.log(d) 
    return d; })]);


    // Eixo X
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text");
            
    // Eixo Y
svg.append("g")
    .call(yAxis)


//Hist

var rect = svg.selectAll("rect")
            .data([qtdVoos[0].value, qtdVoos[1].value, qtdVoos[2].value])
            .enter()
            .append("rect");

var rectAttributes = rect
            .attr("x", function(d, index){ return index*134 + 46; })
            .attr("y", function(d){ return height-d; })
            .attr("height", function(d){ return d; })
            .attr("width", 40)
            .attr("fill","green");



//Parte 2

var prices =[];
var postStart = [];

setDate()

function setDate(){
    for (var i = 0; i < trips.length; i++) {
        prices.push(trips[i].price)
        var startF = new Date(trips[i].start.substring(3,5) + "/" + trips[i].start.substring(0,2) + trips[i].start.substring(5))
        var endF = new Date(trips[i].post.substring(3,5) + "/" + trips[i].post.substring(0,2) + trips[i].post.substring(5))
        var timeDiff = Math.abs(endF.getTime() - startF.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        postStart.push(diffDays)
    }
}

var margin = {top: 20, right: 20, bottom: 50, left: 50}
  , width = 960 - margin.left - margin.right
  , height = 500 - margin.top - margin.bottom;


var x = d3.scaleLinear()
          .domain([0, d3.max(postStart)])  
          .range([ 0, width ]);        

var y = d3.scaleLinear()
          .domain([0, d3.max(prices)]) //y
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

var xAxis = d3.axisBottom(x);

main.append('g')
.attr('transform', 'translate(0,' + height + ')')
.attr('class', 'main axis date')
.call(xAxis);

var yAxis = d3.axisLeft(y);

main.append('g')
.attr('transform', 'translate(0,0)')
.attr('class', 'main axis date')
.call(yAxis);

var g = main.append("svg:g"); 

g.selectAll("scatter-dots")
  .data(prices)  // y
  .enter().append("svg:circle")  
      .attr("cy", function (d) { return y(d); } ) 
      .attr("cx", function (d,i) { return x(postStart[i]); } ) 
      .attr("r", 5) 
      .attr("fill","green")
      .style("opacity", 0.7); 
            




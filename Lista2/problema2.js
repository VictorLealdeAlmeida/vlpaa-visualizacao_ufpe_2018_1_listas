
months = ["Gol","Tam","Azu;"]

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
    width = 600 - margin.left - margin.right,
    height = 670 - margin.top - margin.bottom;

// Ranges
var x = d3.scaleBand().range([0, width]).paddingInner(0.4);
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
            .attr("x", function(d, index){ return index*192 + 38; })
            .attr("y", function(d){ 
alert(d)
                return height-d; })
            .attr("height", function(d){ return d; })
            .attr("width", 40)
            .attr("d", valueline([qtdVoos[0].value, qtdVoos[1].value, qtdVoos[2].value]));
            




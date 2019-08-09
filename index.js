var data = [{
    x: 100,
    y: 200
},{
    x: 300,
    y: 130
},{
    x: 120,
    y: 240
},{
    x: 330,
    y: 210
}];


var svg = d3.select("body").append("svg")
    .attr("width", "800")
    .attr("height", "600");


svg.selectAll("circle")
    .data(data)
    .join('circle')
    .attr('cx', function (d, i) {
        return d.x
    })
    .attr('cy', function(d,i){
        return d.y
    })
    .attr('r', function (d, i) {
        return 10;
    });
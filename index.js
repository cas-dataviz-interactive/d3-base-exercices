d3.csv('dots.csv',function(d){
    return {
        r: +d.val,
        y: +d.posx,
        x: +d.posy
    };
}).then(function(data){
    console.log(data);

    var svg = d3.select("body").append("svg")
    .attr("width", "800")
    .attr("height", "600");

    svg.selectAll("circle")
    .data(data)
    .join('circle')
    .attr('cx', function (d, i) {
        return d.x;
    })
    .attr('cy', function(d,i){
        return d.y;
    })
    .attr('r', function (d, i) {
        return d.r;
    });

});
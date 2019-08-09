var data = [5,11,18,22,7];

var svg = d3.select("body").append("svg")
    .attr("width",800)
    .attr("height",600);


svg.selectAll("circle")
    .data(data)
    .join('circle')
    .attr('cx',function(d,i){
        return 100+ i*100;
    })
    .attr('cy',100)
    .attr('r',function(d,i){
        return d;
    });

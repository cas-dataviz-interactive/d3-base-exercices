var data = [5,11,18,22,7];

var svg = d3.select("body").append("svg")
    .attr("width","800")
    .attr("height","600");


svg.selectAll("rect")
    .data(data)
    .join('rect')
    .attr('x',100)
    .attr('y',function(d,i){
        return 100+i*20;
    })
    .attr('width',function(d,i){
        return d*20;
    })
    .attr('height',10);
    
var colors = ['#23AD7B', '#26303D', '#FF714F', '#FFCC63'];

var width = 800;
var height = 600;

var margin = {
    top: 100,
    left: 100,
    right: 100,
    bottom: 100
};

var innerWidth = width - margin.left - margin.right;
var innerHeight = height - margin.top - margin.bottom;

d3.csv('pigeons_short.csv', function (d) {
    return {
        breeder: d.breeder,
        id: +d.id,
        speed: +d.speed,
        lat: +d.lat,
        lon: +d.lon
    };
}).then(function (data) {
    console.log(data);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var y = d3.scaleLinear()
        .domain([27, 50])
        .range([0, innerHeight]);

    var x = d3.scaleLinear()
        .domain([-120, -80])
        .range([0, innerWidth]);

    var breeders = d3.set(data, function (d) {
        return d.breeder;
    }).values();

    var col = d3.scaleOrdinal()
        .domain(breeders)
        .range(colors);

    svg.selectAll("circle")
        .data(data)
        .join('circle')
        .attr('cx', function (d, i) {
            return x(d.lon);
        })
        .attr('cy', function (d, i) {
            return y(d.lat);
        })
        .attr('r', function (d, i) {
            return 0.3 * d.speed;
        })
        .style('fill', function (d) {
            return col(d.breeder);
        });

    var yaxis = d3.axisLeft(y);
    d3.select('body').select('svg')
        .append('g')
        .classed('yaxis', true)
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .call(yaxis);

    var xaxis = d3.axisBottom(x);
    d3.select('body').select('svg')
        .append('g')
        .classed('xaxis', true)
        .attr('transform', 'translate(' + margin.left + ',' + (height - margin.bottom) + ')')
        .call(xaxis);

});
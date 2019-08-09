d3.csv('pigeons_short.csv', function (d) {
    return {
        id: +d.id,
        speed: +d.speed,
        lat: +d.lat,
        lon: +d.lon
    };
}).then(function (data) {
    console.log(data);

    var svg = d3.select("body").append("svg")
        .attr("width", 800)
        .attr("height", 600);

    var y= d3.scaleLinear()
        .domain([27, 50])
        .range([0, 600]);

    var x = d3.scaleLinear()
        .domain([-120, -80])
        .range([0, 800]);


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
            return 0.3*d.speed;
        });

});
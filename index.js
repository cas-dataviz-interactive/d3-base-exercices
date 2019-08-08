d3.csv('dots.csv', function (d) {
    return {
        posx: +d.posx,
        posy: +d.posy,
        val: +d.val
    };
}).then(function (data) {
    console.log(data);

    var width = 800;
    var height = 600;

    var margin = {
        top: 20,
        left: 50,
        right: 100,
        bottom: 100
    };

    var innerWidth = width - margin.left - margin.right;
    var innerHeight = height - margin.top - margin.bottom;

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = d3.scaleLinear()
        .domain([0, 900])
        .range([0, innerWidth]);

    var y = d3.scaleLinear()
        .domain([0, 600])
        .range([innerHeight, 0]);

    svg.selectAll("circle")
        .data(data)
        .join('circle')
        .attr('cx', function (d, i) {
            return x(d.posx);
        })
        .attr('cy', function (d, i) {
            return y(d.posy);
        })
        .attr('r', function (d, i) {
            return d.val;
        })
        .on('mouseover', function (d) {
            var r = Math.random() * 255;
            var g = Math.random() * 255;
            var col = 'rgb(' + r + ',' + g + ',' + 100 + ')';
            d3.select(this).attr('fill', col);
            d3.select(this).transition().attr('r',d.val+20);
        })
        .on('mouseout', function (d) {
            d3.select(this).attr('fill', 'black');
            d3.select(this).transition().attr('r',d.val);
        })

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





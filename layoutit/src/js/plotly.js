var margin_19 = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin_19.left - margin_19.right,
    height = 400 - margin_19.top - margin_19.bottom;

// append the svg object to the body of the page
var svg_19 = d3.select("#WHATEVERTAGHERE")
  .append("svg")
    .attr("width", width + margin_19.left + margin_19.right)
    .attr("height", height + margin_19.top + margin_19.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin_19.left + "," + margin_19.top + ")");



d3.csv("2019_data.csv").then(function(data19){
    if (tag == "guns"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.guns;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "virus"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.virus;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "boredom"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.boredom;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "ammo"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.ammo;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "ar15"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.ar15;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "gun stores"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data["gun stores"];
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "disinfectant"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.disinfectant;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "bleach"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.disinfectant;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "toilet paper"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data["toilet paper"];
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "netflix"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.netflix;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "porn"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.porn;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else{
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.diy;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

  // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(values)])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y));
  
  // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
    )})

var margin_20 = {top: 510, right: 530, bottom: 530, left: 560},
    width = 460 - margin_19.left - margin_19.right,
    height = 400 - margin_19.top - margin_19.bottom;

// append the svg object to the body of the page
var svg_20 = d3.select("#WHATEVERTAGHERE")
  .append("svg")
    .attr("width", width + margin_19.left + margin_19.right)
    .attr("height", height + margin_19.top + margin_19.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin_20.left + "," + margin_20.top + ")");


//////2020
d3.csv("2020_data.csv").then(function(data19){
    if (tag == "guns"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.guns;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "virus"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.virus;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "boredom"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.boredom;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "ammo"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.ammo;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "ar15"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.ar15;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "gun stores"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data["gun stores"];
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "disinfectant"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.disinfectant;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });
    }
    else if (tag == "bleach"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.disinfectant;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "toilet paper"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data["toilet paper"];
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "netflix"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.netflix;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else if (tag == "porn"){
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.porn;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    else{
        values = [];
        i = 0;
        data19.forEach(function(data){
            values[i] = +data.diy;
            data.date = d3.timeParse("%Y-%m-%d")(data.date);
            i++;
            });

    }
    var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

  // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(values)])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y));
  
  // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
    )})

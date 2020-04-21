// Initializes the page with a default plot
function init() {
    d3.csv("2019_data.csv").then(function(data19){
        var dates = [];
        var values = [];
        var i = 0;
        data19.forEach(function(d){
            dates[i] = d3.timeParse("%Y-%m-%d")(d.date);
            values[i] = +d.boredom;
            i++;
        });
        data = [{
            x: dates,
            y: values
        }];

        Plotly.newPlot("plot_19", data)
    })

    d3.csv("2020_data.csv").then(function(data20){
        var dates = [];
        var values = [];
        var i = 0;
        data20.forEach(function(d){
          dates[i] = d3.timeParse("%Y-%m-%d")(d.date);
          values[i] = +d.boredom;
          i++;
        })
        data = [{
          x: dates,
          y: values
        }];
        Plotly.newPlot("plot_20", data)
    })
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
    var i = 0;
  
    if (dataset === 'boredom') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.boredom;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_19", "x", [x])
        Plotly.restyle("plot_19", "y", [y])
      })
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          y[i] = +d.boredom;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_20", "x", [x])
        Plotly.restyle("plot_20", "y", [y])
      })

    }
  
    if (dataset === 'netflix') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.netflix;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_19", "x", [x])
        Plotly.restyle("plot_19", "y", [y])
      })
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          y[i] = +d.netflix;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_20", "x", [x])
        Plotly.restyle("plot_20", "y", [y])
      })
      
    }

    if (dataset === 'porn') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.porn;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_19", "x", [x])
        Plotly.restyle("plot_19", "y", [y])
      })
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          y[i] = +d.porn;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_20", "x", [x])
        Plotly.restyle("plot_20", "y", [y])
      })
    }
  
    if (dataset === 'diy') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.diy;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_19", "x", [x])
        Plotly.restyle("plot_19", "y", [y])
      })
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          y[i] = +d.diy;
          x[i] = d3.timeParse("%Y-%m-%d")(d.date);
          i++;
        })
  
        Plotly.restyle("plot_20", "x", [x])
        Plotly.restyle("plot_20", "y", [y])
      })

    }


  }
  
  init();
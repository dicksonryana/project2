// Initializes the page with a default plot
function init() {
 
    d3.csv("2019_data.csv").then(function(data19){
        var dates = [];
        var values = [];
        var i = 0;
        data19.forEach(function(d){
            dates[i] = d3.timeParse("%Y-%m-%d")(d.date);
            values[i] = +d.guns;
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
          values[i] = +d.guns;
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
  
    // Initialize y arrays
    var y = [];
    var x = [];
    var i = 0;
  
    if (dataset === 'guns') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.guns;
          i++;
        })
        Plotly.restyle("plot_19", "y", [y])
      })
    
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          x[i] = +d.guns;
          i++;
         
        })
        console.log(x);
        Plotly.restyle("plot_20", "y", [x])
      })

    }
  
    if (dataset === 'ammo') {
      console.log("ammo if");
      d3.csv("2019_data.csv").then(function(data19){

        data19.forEach(function(d){
          y[i] = +d.ammo;
          i++;
        })
        Plotly.restyle("plot_19", "y", [y])
      })
  
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          x[i] = +d.ammo;
          i++;
        })
        Plotly.restyle("plot_20", "y", [x])
      })
      
    }

    if (dataset === 'ar15') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.ar15;
          i++;
        })
        Plotly.restyle("plot_19", "y", [y])
      })
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          x[i] = +d.ar15;
          i++;
        })
  
        Plotly.restyle("plot_20", "y", [x])
      })
    }
  
    if (dataset === 'gun stores') {
      console.log("gun stores if");
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d["gun stores"];
          i++;
        })
  
        Plotly.restyle("plot_19", "y", [y])
      })
    
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          x[i] = +d["gun stores"];
          i++;
        })

        Plotly.restyle("plot_20", "y", [x])
      })

    }


  }
  
  init();
  
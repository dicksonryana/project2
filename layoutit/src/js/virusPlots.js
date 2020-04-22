// Initializes the page with a default plot
function init() {
    d3.csv("2019_data.csv").then(function(data19){
        var dates = [];
        var values = [];
        var i = 0;
        data19.forEach(function(d){
            dates[i] = d3.timeParse("%Y-%m-%d")(d.date);
            values[i] = +d.virus;
            i++;
        });
        data = [{
            x: dates,
            y: values
        }];
        var layout = {
          title: "2019 Search Trends",
          yaxis: {
            range: [0, 110]
          }
        }
        Plotly.newPlot("plot_19", data, layout)
    })

    d3.csv("2020_data.csv").then(function(data20){
        var dates = [];
        var values = [];
        var i = 0;
        data20.forEach(function(d){
          dates[i] = d3.timeParse("%Y-%m-%d")(d.date);
          values[i] = +d.virus;
          i++;
        })
        data = [{
          x: dates,
          y: values
        }];
        var layout = {
          title: "2020 Search Trends",
          yaxis: {
            range: [0, 110]
          }
        }
        Plotly.newPlot("plot_20", data, layout)
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
  
    var y = [];
    var k = 0;
    var i = 0;
  
    if (dataset === 'virus') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.virus;
          i++;
        })
        
        Plotly.restyle("plot_19", "y", [y])
        
      })
    
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          y[k] = +d.virus;
          k++;
        })
        
        Plotly.restyle("plot_20", "y", [y])
        
      })

    }
  
    if (dataset === 'disinfectant') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.disinfectant;
          i++;
        })
       
        Plotly.restyle("plot_19", "y", [y])
      
      })
      
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          y[k] = +d.disinfectant;
          k++;
        })
        
        Plotly.restyle("plot_20", "y", [y])
      
      })
      
    }

    if (dataset === 'bleach') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d.bleach;
          i++;
        })
       
        Plotly.restyle("plot_19", "y", [y])
      })
     
      d3.csv("2020_data.csv").then(function(data20){
        data20.forEach(function(d){
          y[k] = +d.bleach;
          k++;
        })
      
        Plotly.restyle("plot_20", "y", [y])
      })
    }
  
    if (dataset === 'toilet paper') {
      d3.csv("2019_data.csv").then(function(data19){
        data19.forEach(function(d){
          y[i] = +d["toilet paper"];
          i++;
        })
       
        Plotly.restyle("plot_19", "y", [y])
      })
      
      d3.csv("2020_data.csv").then(function(data20){
        console.log("wazzup")
        data20.forEach(function(d){
          y[k] = +d["toilet paper"];
          k++;
          console.log("hello");
        })
        
        Plotly.restyle("plot_20", "y", [y])
      })

    }


  }
  
  init();

  document.getElementById("home").addEventListener("click", () =>{
    window.location = "index.html"
  })
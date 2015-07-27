function makeAjaxRequest(url, callback){
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: callback
  })
};

function getHours(json) {
  return json.hourly_forecast.map(function(forecast){
    return forecast.FCTTIME.hour;
  });
};

function getFarenheits(json) {
  return json.hourly_forecast.map(function(forecast){
    return forecast.temp.metric;
  });
};

function getHumidity(json) {
  return json.hourly_forecast.map(function(forecast){
    return forecast.humidity;
  });
};

// function getHeatIndex(json) {
//   return json.hourly_forecast.map(function(forecast){
//     return forecast.feelslike.metric;
//   });
// };

function generateDataSet(hours, fahrenheits, humidity){
  return {
    labels: hours,
    datasets: [
        {
            label: "Hourly Weather for New York",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: fahrenheits
        },

        {
            label: "Hourly Humidity for New York",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: humidity
        },

        // {
        //     label: "Hourly Heat Index for New York",
        //     fillColor: "rgba(220,220,220,0.2)",
        //     strokeColor: "rgba(220,220,220,1)",
        //     pointColor: "rgba(220,220,220,1)",
        //     pointStrokeColor: "#fff",
        //     pointHighlightFill: "#fff",
        //     pointHighlightStroke: "rgba(220,220,220,1)",
        //     data: heatindex
        // }
    ]
  };
};

// var myLineChart = new Chart(ctx).Line(data, options);

// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };
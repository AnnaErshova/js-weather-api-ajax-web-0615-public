jQuery(document).ready(function($) {

  var API_KEY = "576c51364e2f340a";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {

    var data = generateDataSet(getHours(json), getFarenheits(json), getHumidity(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true});
  });

});

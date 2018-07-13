// Table rows are clickable
function rowClick(elem, unit) {
  //alert(elem + num);
  if (unit == 'icu-6') {
    window.location = "icu-6.html";
  } else if (unit == 'pcu-8') {
    window.location = "pcu-8.html";
  } else {
    window.location = "http://www.google.com";
  }
}

// Data for stacked bar chart
var chartData = [{
    "unit": "ICU 1",
    "low": 1,
    "medium": 10,
    "high": 4,
    "url": "house-view.html",
  }, {
    "unit": "ICU 2",
    "low": 0,
    "medium": 7,
    "high": 5,
    "url": "house-view.html",
  }, {
    "unit": "ICU 3",
    "low": 1,
    "medium": 9,
    "high": 5,
    "url": "house-view.html",
  }, {
    "unit": "ICU 4",
    "low": 1,
    "medium": 3,
    "high": 7,
    "url": "house-view.html",
  }, {
    "unit": "ICU 5",
    "low": 0,
    "medium": 9,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "ICU 6",
    "low": 1,
    "medium": 4,
    "high": 5,
    "url": "icu-6.html",
  }, {
    "unit": "ICU 7",
    "low": 1,
    "medium": 7,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "PCU 1",
    "low": 6,
    "medium": 12,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "PCU 2",
    "low": 4,
    "medium": 17,
    "high": 5,
    "url": "house-view.html",
  }, {
    "unit": "PCU 3",
    "low": 5,
    "medium": 11,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "PCU 4",
    "low": 3,
    "medium": 18,
    "high": 4,
    "url": "house-view.html",
  }, {
    "unit": "PCU 5",
    "low": 5,
    "medium": 14,
    "high": 4,
    "url": "house-view.html",
  }, {
    "unit": "PCU 6",
    "low": 6,
    "medium": 15,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "PCU 7",
    "low": 2,
    "medium": 13,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "PCU 8",
    "low": 8,
    "medium": 13,
    "high": 5,
    "url": "pcu-8.html",
  }, {
    "unit": "PCU 9",
    "low": 6,
    "medium": 12,
    "high": 5,
    "url": "house-view.html",
  }, {
    "unit": "PCU 10",
    "low": 5,
    "medium": 15,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "PCU 11",
    "low": 7,
    "medium": 12,
    "high": 4,
    "url": "house-view.html",
  }, {
    "unit": "PCU 12",
    "low": 5,
    "medium": 16,
    "high": 5,
    "url": "house-view.html",
  }, {
    "unit": "PCU 13",
    "low": 5,
    "medium": 14,
    "high": 4,
    "url": "house-view.html",
  }, {
    "unit": "PCU 14",
    "low": 4,
    "medium": 15,
    "high": 6,
    "url": "house-view.html",
  }, {
    "unit": "MS 1",
    "low": 12,
    "medium": 9,
    "high": 1,
    "url": "house-view.html",
  }, {
    "unit": "MS 2",
    "low": 15,
    "medium": 8,
    "high": 0,
    "url": "house-view.html",
  }, {
    "unit": "MS 3",
    "low": 15,
    "medium": 9,
    "high": 2,
    "url": "house-view.html",
  }, {
    "unit": "MS 4",
    "low": 16,
    "medium": 7,
    "high": 1,
    "url": "house-view.html",
  }, {
    "unit": "MS 5",
    "low": 14,
    "medium": 10,
    "high": 1,
    "url": "house-view.html",
  },
  ];

// Code for amchart
var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "fontFamily": "Open Sans",
  "fontSize": 9,
  "legend": {
    "horizontalGap": 10,
    "position": "bottom",
    "useGraphSettings": true,
    "markerSize": 10,
    "fontSize": 9
  },
  "dataProvider": chartData,
  "valueAxes": [{
    "stackType": "regular",
    "axisAlpha": 0.3,
    "gridAlpha": 0.05,
    "totalText": "[[total]]"
  }],
  "graphs": [
    {
    "balloonText": "<br><span style='font-size:10px'><b>[[value]]</b></span>",
    "fillAlphas": 1.0,
    "labelText": "",
    "lineAlpha": 0.3,
    "title": "Low",
    "type": "column",
    "color": "#000000",
    "fillColors": GREEN,
    "valueField": "low",
    "urlField": "url"
  }, 
    {
    "balloonText": "<br><span style='font-size:10px'><b>[[value]]</b></span>",
    "fillAlphas": 1.0,
    "labelText": "",
    "lineAlpha": 0.3,
    "title": "Medium",
    "type": "column",
    "color": "#000000",
    "fillColors": YELLOW,
    "valueField": "medium",
    "urlField": "url"
  }, 
    {
    "balloonText": "<br><span style='font-size:10px;'><b>[[value]]</b></span>",
    "fillAlphas": 1.0,
    "labelText": "",
    "lineAlpha": 0.3,
    "title": "High",
    "type": "column",
    "color": "#000",
    "fillColors": RED,
    "valueField": "high",
    "urlField": "url"
  } ],
  "categoryField": "unit",
  "balloon": {
    "background-color": "#000",
    "maxWidth": 100
  },
  "categoryAxis": {
    "gridPosition": "start",
    "axisAlpha": 0,
    "gridAlpha": 0,
    "position": "left"
  }
});

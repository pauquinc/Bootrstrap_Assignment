const dataLine = {
    type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(105, 0, 132, .2)',
            ],
            fill: true,
            borderColor: [
              'rgba(255, 99, 132, 0.8)',
            ],
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: "My Second dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: [
              'rgba(0, 137, 132, .2)',
            ],
            fill: true,
            borderColor: [
              'rgba(50, 150, 255, 1)',
            ],
            borderWidth: 2,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true
      }
  };
  
  new mdb.Chart(document.getElementById('line-chart'), dataLine);
  
  var areaChartOptions = {
    series: [{
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['0', '1','2','3','4','5','6','7','8','9','10'],
  markers: {
    size: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), areaChartOptions);
  chart.render();

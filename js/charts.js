// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [{
      label: 'Data',
      data: [30, 20, 50],
      backgroundColor: ['red', 'green', 'blue']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

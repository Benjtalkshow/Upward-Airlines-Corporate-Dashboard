google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);


// Function to draw the chart
function drawChart() {
    // Create the data table
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Category');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Category 1', 30],
        ['Category 2', 20],
        ['Category 3', 50]
    ]);

    // Set chart options
    var options = {
        width: '100%',
        height: '100%',
        chartArea: {
            left: 10,
            top: 10,
            right: 10,
            bottom: 10,
            width: '100%',
            height: '100%'
        },
        legend: {
            position: 'bottom'
        },
        pieSliceText: 'percentage',
        is3D: true
    };

    // Instantiate and draw the chart, passing in the options
    var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
    chart.draw(data, options);

    // Redraw the chart when the window is resized
    window.addEventListener('resize', function () {
        chart.draw(data, options);
    });
}

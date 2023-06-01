const ctxs = document.getElementById('myChart');
new Chart(ctxs, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Revenue',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#1ab395', '#f2086d', '#f9962c', '#0b7eca', 'skyblue', 'red'],
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRation: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Revenue data
var revenueData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: 'Revenue',
        data: [50000, 75000, 90000, 65000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for bars
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Chart configuration
var revenueChartConfig = {
    type: 'bar',
    data: revenueData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Revenue ($)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Quarter'
                }
            }
        }
    }
};

// Create the chart
var revenueChart = new Chart('revenueChart', revenueChartConfig);


// Expense data
var expenseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Expenses',
        data: [2000, 2200, 1900, 2400, 2100, 2300],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)', // Red color for the line
        borderWidth: 2
    }]
};

// Chart configuration
var expenseChartConfig = {
    type: 'line',
    data: expenseData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Expenses ($)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            }
        }
    }
};

// Create the chart
var expenseChart = new Chart('expenseChart', expenseChartConfig);


// Total Amount at Gate
const totalAmountData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
        label: 'Total Amount',
        data: [50000, 75000, 90000, 65000],
        backgroundColor: ['#1ab395', '#f2086d', '#f9962c', '#0b7eca'],
        borderWidth: 1,
    }]
};

// Chart configuration
const chartConfig = {
    type: 'bar',
    data: totalAmountData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Total Amount'
                },
                grid: {
                    color: '#9ad0f5'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Quarter'
                },
                grid: {
                    color: '#9ad0f5'
                }
            }
        }
    }
};

// Create the chart
const ctx = document.getElementById('totalAmountChart').getContext('2d');
new Chart(ctx, chartConfig);


// Sample data for % of Tickets with Direct Routes
const directRoutePercentage = 75;

// Chart configuration
const directRouteConfig = {
  type: 'doughnut',
  data: {
    labels: ['Direct Route', 'Other Routes'],
    datasets: [
      {
        data: [directRoutePercentage, 100 - directRoutePercentage],
        backgroundColor: ['#1ab395', '#f2086d'],
        borderColor: '#ffffff',
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '% of Tickets with Direct Routes',
        font: {
          size: 16
        }
      },
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label;
            const value = context.parsed.toFixed(2);
            return `${label}: ${value}%`;
          }
        }
      }
    }
  }
};

// Create the chart
const ctx_directRouteChart = document.getElementById('directRouteChart').getContext('2d');
new Chart(ctx_directRouteChart, directRouteConfig);


// Sample data for Total Amount of Time at Gate
const totalTimeData = [
    {
      label: 'Direct Route',
      value: 120,
    },
    {
      label: 'Other Routes',
      value: 90,
    },
  ];
  
  // Colors
  const colors = ['#1ab395', '#f2086d'];
  
  // Chart configuration
  const totalTimeDataConfig = {
    type: 'bar',
    data: {
      labels: totalTimeData.map((data) => data.label),
      datasets: [
        {
          type: 'line',
          label: 'Total Time',
          data: totalTimeData.map((data) => data.value),
          backgroundColor: colors[0],
          borderColor: colors[0],
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Total Amount of Time at Gate',
          font: {
            size: 16,
          },
        },
        legend: {
          position: 'bottom',
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = totalTimeData[context.dataIndex].label;
              const value = totalTimeData[context.dataIndex].value;
              return `${label}: ${value} minutes`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Time (minutes)',
          },
        },
      },
    },
  };
  
  // Create the chart
  const ctx_totalTimeData = document.getElementById('totalTimeChart').getContext('2d');
  new Chart(ctx_totalTimeData,totalTimeDataConfig);
  


  // Sample data for Internal Cost per Light
const internalCostData = [
    { month: 'Jan', cost: 200 },
    { month: 'Feb', cost: 350 },
    { month: 'Mar', cost: 280 },
    { month: 'Apr', cost: 420 },
    { month: 'May', cost: 300 },
    { month: 'Jun', cost: 380 },
  ];
  
  // Colors
  const color = ['#1ab395'];
  
  // Chart configuration
  const internalCostDataConfig = {
    type: 'line',
    data: {
      labels: internalCostData.map((data) => data.month),
      datasets: [
        {
          label: 'Internal Cost',
          data: internalCostData.map((data) => data.cost),
          backgroundColor: colors[0],
          borderColor: colors[0],
          fill: 'start',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Internal Cost per Light',
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = internalCostData[context.dataIndex].month;
              const value = internalCostData[context.dataIndex].cost;
              return `Month: ${label}\nCost: $${value}`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Cost ($)',
          },
          grid: {
            color: '#9ad0f5',
          },
        },
        x: {
          grid: {
            color: '#9ad0f5',
          },
        },
      },
      elements: {
        area: {
          backgroundColor: 'rgba(26, 179, 149, 0.3)',
          borderColor: 'transparent',
          borderWidth: 0,
        },
      },
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
      },
      plugins: {
        decimation: {
          algorithm: 'lttb',
          enabled: true,
        },
      },
    },
  };
  
  // Create the chart
  const ctx_internalCostChart = document.getElementById('internalCostChart').getContext('2d');
  new Chart(ctx_internalCostChart, internalCostDataConfig);
  

  // Sample data for Maintenance Cost per 100k Miles
const maintenanceCostData = {
    labels: ['Engine', 'Brakes', 'Tires', 'Electrical', 'Suspension'],
    datasets: [
      {
        label: 'Maintenance Cost',
        data: [30, 45, 20, 35, 40],
        backgroundColor: '#f2086d',
        borderColor: '#f2086d',
        pointBackgroundColor: 'blue',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'blue',
      },
    ],
  };
  
  // Colors
  const colorss = ['#1ab395'];
  
  // Chart configuration
  const maintenanceCostDataConfig = {
    type: 'radar',
    data: maintenanceCostData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Maintenance Cost per 100k Miles',
          font: {
            size: 16,
          },
        },
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = maintenanceCostData.labels[context.dataIndex];
              const value = maintenanceCostData.datasets[0].data[context.dataIndex];
              return `Category: ${label}\nCost: $${value}`;
            },
          },
        },
      },
      scales: {
        r: {
          angleLines: {
            color: '#f2086d',
          },
          grid: {
            color: '#f2086d',
          },
          pointLabels: {
            font: {
              size: 12,
            },
          },
          ticks: {
            beginAtZero: true,
          },
        },
      },
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
      },
    },
  };
  
  // Create the chart
  const ctx_maintenanceCostChart = document.getElementById('maintenanceCostChart').getContext('2d');
  new Chart(ctx_maintenanceCostChart, maintenanceCostDataConfig);
  
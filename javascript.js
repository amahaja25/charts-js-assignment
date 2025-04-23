var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Education, training and library occupations', 'Protective service occupations', 'Construction and extraction occupations', 'Community and social service occupations', 'Transportation and material moving occupations', 'Healthcare practitioners and technical occupations', 'Installation, maintenance, and repair occupations',],
        datasets: [
        {
            label: 'Percent who are members of unions',
            data: [32.3, 29.6, 15.4, 13.6, 13.2, 12.0, 12.6,],
            backgroundColor: [
                '#07553B'
            ],
        },
        {
            label: 'Percent who are represented but not union members',
            data: [3.5, 2.9, 1, 1.7, 1, 1.7, 1.1,],
            backgroundColor: [
                '#CED46A'
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Of the 3,346 education, training and library workers in the U.S., 32.3% are union members as of 2024',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The education, training and library sector also has the highest percentage of workers who are represented by unions but choose to not be members of them, with 3.5% in this category.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    },
});


// scatterplot

var ctx = document.getElementById('myChart2').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 26.5, y: 147000},
                ],
                label: "Hawaii",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 20.6, y: 1706000},
                ],
                label: "New York",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 17.7, y: 53000},
                ],
                label: "Alaska",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 16.5, y: 269000},
                ],
                label: "Connecticut",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 16.2, y: 682000},
                ],
                label: "New Jersey",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 16, y: 548000},
                ],
                label: "Washington",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 15.9, y: 292000},
                ],
                label: "Oregon",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 14.6, y: 496000},
                ],
                label: "Massachusetts",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 14.5, y: 2381000},
                ],
                label: "California",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 14.5, y: 73000},
                ],
                label: "Rhode Island",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 14.3, y: 42000},
                ],
                label: "Vermont",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 14.2, y: 379000},
                ],
                label: "Minnesota",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 13.4, y: 581000},
                ],
                label: "Michigan",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 13.1, y: 734000},
                ],
                label: "Illinois",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 13.1, y: 77000},
                ],
                label: "Maine",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Hawaii has the highest union membership rate in the U.S. despite having the tenth smallest workforce',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Twenty-one states in the country have union membership rates above the United States\' average of 9.9%.'
                }
            },
            scales: {
                y: {
                  title: {
                    display: true,
                    text: 'Total union members'
                  }
                },
                x: {
                  title: {
                    display: true,
                    text: 'Union membership rate'
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }
              }
            }
   
        });

// radar chart timeuse

var ctx = document.getElementById('myChart3').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Sleeping',
              'Working',
              'Eating and drinking',
              'Socializing',
              'Relaxing and leisure',
            ],
            datasets: [{
              label: 'Men',
              data: [8.7, 5.20, 1.09, 4.4, 3.96],
              fill: true,
              backgroundColor: 'rgba(255, 128, 99, 0.2)',
              borderColor: '#c72d1b',
              pointBackgroundColor: '#c72d1b',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#c72d1b'
            },
            {
              label: 'Women',
              data: [8.85, 3.76, 1.05, 3.83, 3.33],
              fill: true,
              backgroundColor: 'rgba(255, 212, 58, 0.2)',
              borderColor: '#FDD20E',
              pointBackgroundColor: '#FDD20E',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#FDD20E'
            }]
          },
          options: {
            responsive: true,
            plugins: {
            title: {
              display: true,
              text: 'Adults in the United States spend an average of 8.8 hours sleeping on nonholiday weekdays ',
              font: {
                size: 18
            }
            },
          subtitle: {
              display: true,
              text: 'Women and men spend their time similarly, with women spending less time on most activities except for sleepting.'
          },
            elements: {
              line: {
                borderWidth: 3
              }
            }
          }
        }
        });
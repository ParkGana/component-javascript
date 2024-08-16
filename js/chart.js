function ChartEvent() {
    let bar = document.getElementById('chart-bar')

    new Chart(bar, {
        type: 'bar',
        data: {
            labels: ['2021', '2022', '2023', '2024'],
            datasets: [
                {
                    label: 'A',
                    data: [80, 65, 64, 47],
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 0, 0, 0.3)',
                    borderWidth: 2
                },
                {
                    label: 'B',
                    data: [52, 71, 81, 93],
                    backgroundColor: 'rgba(0, 0, 255, 0.3)',
                    borderColor: 'rgba(0, 0, 255, 0.3)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    border: {
                        display: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    },
                    grid: {
                        display: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: true,
                        stepSize: 20
                    },
                    border: {
                        display: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    },
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                    text: 'Bar Chart Title'
                },
                legend: {
                    display: false,
                    position: 'top'
                }
            }
        }
    })

    /****************************************************************************************************/

    let doughnut = document.getElementById('chart-doughnut')

    new Chart(doughnut, {
        type: 'doughnut',
        data: {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [30, 17, 53],
                    backgroundColor: ['rgba(255, 0, 0, 0.3)', 'rgba(0, 255, 0, 0.3)', 'rgba(0, 0, 255, 0.3)']
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: 'Doughnut Chart Title'
                },
                legend: {
                    display: false,
                    position: 'top'
                }
            }
        }
    })

    /****************************************************************************************************/

    let line = document.getElementById('chart-line')

    new Chart(line, {
        type: 'line',
        data: {
            labels: ['2021', '2022', '2023', '2024'],
            datasets: [
                {
                    label: 'A',
                    data: [20, 10, 50, 70],
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 0, 0, 0.3)',
                    borderWidth: 2
                },
                {
                    label: 'B',
                    data: [40, 60, 90, 50],
                    backgroundColor: 'rgba(0, 0, 255, 0.3)',
                    borderColor: 'rgba(0, 0, 255, 0.3)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    border: {
                        display: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    },
                    grid: {
                        display: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: true,
                        stepSize: 20
                    },

                    border: {
                        display: false,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    },
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                    text: 'Line Chart Title'
                },
                legend: {
                    display: false,
                    position: 'top'
                }
            }
        }
    })

    /****************************************************************************************************/

    let radar = document.getElementById('chart-radar')

    new Chart(radar, {
        type: 'radar',
        data: {
            labels: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ'],
            datasets: [
                {
                    label: 'A',
                    data: [50, 70, 55, 78, 60],
                    fill: true,
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    pointBackgroundColor: 'rgba(255, 0, 0, 0.3)',
                    borderColor: 'rgba(255, 0, 0, 0.3)',
                    borderWidth: 2
                },
                {
                    label: 'B',
                    data: [70, 40, 70, 78, 45],
                    fill: true,
                    backgroundColor: 'rgba(0, 0, 255, 0.3)',
                    pointBackgroundColor: 'rgba(0, 0, 255, 0.3)',
                    borderColor: 'rgba(0, 0, 255, 0.3)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: false,
                        stepSize: 20
                    },
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                    text: 'Radar Chart Title'
                },
                legend: {
                    display: false,
                    position: 'top'
                }
            }
        }
    })
}

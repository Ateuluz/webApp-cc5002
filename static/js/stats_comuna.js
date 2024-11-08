Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Número de Contactos por Comuna'
    },
    series: [{
        name: 'Contactos',
        data: [],
        showInLegend: true,
        dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}'
        }
    }]
});

fetch('http://127.0.0.1:5000/get_stats_comuna')
    .then(response => response.json())
    .then(data => {
        const chart = Highcharts.charts.find(
            (chart) => chart && chart.renderTo.id === "container"
        );

        chart.update({
            xAxis: {
                categories: data.categories // Update xAxis categories
            },
            series: [
                {
                    data: data.seriesData, // Update series data
                },
            ],
        });
    })
    .catch(error => console.error('Error fetching data:', error));
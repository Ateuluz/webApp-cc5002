Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Número de Dispositivos por Tipo'
    },
    series: [{
        name: 'Dispositivos',
        data: [],
        showInLegend: true,
        dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y}'
        }
    }]
});
  
fetch("http://127.0.0.1:5000/get_stats_tipo")
    .then((response) => response.json())
    .then((data) => {
  
        const chart = Highcharts.charts.find(
            (chart) => chart && chart.renderTo.id === "container"
        );
  
        chart.update({
            series: [{
                data: data,
            }],
        });
    })
    .catch((error) => console.error("Error:", error));
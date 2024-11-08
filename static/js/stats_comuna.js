// Highcharts.chart('container', {
//     chart: {
//         type: 'pie'
//     },
//     title: {
//         text: 'Número de Contactos por comuna'
//     },
//     series: [{
//         name: 'Dispositivos',
//         data: [],
//         showInLegend: true,
//         dataLabels: {
//             enabled: true,
//             format: '{point.name}: {point.y}'
//         }
//     }]
// });

// fetch("http://127.0.0.1:5000/get_stats_comuna")
//     .then((response) => response.json())
//     .then((data) => {

//         const chart = Highcharts.charts.find(
//         (chart) => chart && chart.renderTo.id === "container"
//         );

//         chart.update({
//         series: [
//             {
//             data: data,
//             },
//         ],
//         });
//     })
//     .catch((error) => console.error("Error:", error));

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Número de Contactos por comuna'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Número de Contactos'
        }
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


fetch("http://127.0.0.1:5000/get_stats_comuna")
    .then((response) => response.json())
    .then((data) => {
        const chart = Highcharts.charts.find(
            (chart) => chart && chart.renderTo.id === "container"
        );

        const categories = data.categories; // Array of categories
        const seriesData = data.seriesData; // Array of series data
    
        chart.update({
            xAxis: {
                categories: categories // Update xAxis categories
            },
            series: [
                {
                    data: seriesData, // Update series data
                },
            ],
        });
    })
    .catch((error) => console.error("Error:", error));
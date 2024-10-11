// function redirectToInfoPage(imageID) {
//     window.location.href = `informacion-dispositivo.html?id=${encodeURIComponent(imageID)}`;
// }

document.addEventListener('DOMContentLoaded', function() {
    // Select all rows with a data-href attribute
    const rows = document.querySelectorAll('tr[data-href]');
    
    // Add click event listener to each row
    rows.forEach(function(row) {
        row.addEventListener('click', function() {
            // Redirect to the URL specified in the data-href attribute
            window.location.href = row.getAttribute('data-href');
        });
    });
});

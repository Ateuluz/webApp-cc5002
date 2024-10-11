document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('form');

    form.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && event.target.type !== 'submit') {
            event.preventDefault();
        }
    });

    // Validate form and handle submit
    form.onsubmit = function(event) {
        event.preventDefault();

        document.getElementById("form").style.display = "none";
        document.getElementById("lastStep").style.display = "flex";

        const formData = new FormData(this);
        fetch('/agregar_donacion', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        }).catch(error => {
            console.error('Error:', error);
        });
    };
});

function mySubmit() {
        
    // document.getElementById("customModal").style.display = "block";

    if (validarForm()) document.getElementById("customModal").style.display = "block";
    // alert("mySubmit called")
};

function myCancelSubmit() {
    document.getElementById("customModal").style.display = "none";
    // allowSubmit = false;
};

function myConfirmSubmit() {
    document.getElementById("customModal").style.display = "none";
    // allowSubmit = true;
};

document.getElementById("button-submit").onclick = mySubmit;
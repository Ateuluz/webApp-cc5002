document.addEventListener('DOMContentLoaded', function() {
    const celularInput = document.getElementById("celular");

    celularInput.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, '');

        if (value.length > 9) {
            value = value.slice(0, 9);
        }

        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i === 1 || i === 5) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }

        this.value = formattedValue;
    });
});
document.addEventListener('DOMContentLoaded', function() {

    const validarNombre = () => {
        const nombre = document.getElementById('name-comment-input').value.trim();
        if(!nombre) return false;
        let lengthValid = nombre.trim().length >= 3 && nombre.trim().length <= 80;
        return lengthValid;
    };

    const validarComentario = () => {
        const comentario = document.getElementById('comment-input').value.trim();
        if(!comentario) return false;
        let lengthValid = comentario.trim().length >= 5 && comentario.trim().length <= 200;
        return lengthValid;
    }

    async function comment() {
        
        if (!validarNombre()) {
            alert('El nombre del comentario debe tener entre 3 y 80 caracteres.');
            return;
        }
        if (!validarComentario()) {
            alert('El comentario debe tener entre 5 y 200 caracteres.');
            return;
        }

        document.getElementById('form');

        form.submit();
        
    }

    let commentBtn = document.getElementById("comment-button");
    commentBtn.addEventListener("click", comment);
});

function toggleImageSize(image) {
    let overlay = document.querySelector('.device-image-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('device-image-overlay');
        document.body.appendChild(overlay);
    }

    image.classList.toggle('expanded');
    
    if (image.classList.contains('expanded')) {
        overlay.classList.remove("hidden-overlay");
        document.body.classList.add('no-scroll'); // Disable scrolling
    } else {
        overlay.classList.add("hidden-overlay");
        document.body.classList.remove('no-scroll'); // Enable scrolling
    }
}
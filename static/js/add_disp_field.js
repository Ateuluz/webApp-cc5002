document.addEventListener('DOMContentLoaded', function() {
    agregarOpcionesDispositivo();
    // document.getElementById("remove-0").style.display = "none";
    document.getElementById("remove-0").remove();
});

document.getElementById("button-agregar").addEventListener("click", agregarOpcionesDispositivo)

let dispCount = 0;

function agregarOpcionesDispositivo() {
    console.log(dispCount);

    let typeOptionList = [
        "Pantalla",
        "Notebook",
        "Tablet",
        "Celular",
        "Consola",
        "Mouse",
        "Teclado",
        "Impresora",
        "Parlante",
        "Audifonos",
        "Otro",
    ]
    
    let stateOptionList = [
        "Funciona perfecto",
        "Funciona a medias",
        "No Funciona",
    ]
    
    const dispositivo = document.createElement('div');
    dispositivo.id = dispCount;
    dispositivo.className = "dispositivo";
    dispositivo.classList.add("dispositivo");
    dispositivo.classList.add("form-group");
    
    const errorMessageDiv = document.createElement('div');
    errorMessageDiv.id = `error-message-div-${dispCount}`;
    errorMessageDiv.className = "error-message-div";
    errorMessageDiv.classList.add("error-message-div");
    errorMessageDiv.style.display = 'none';
    
    const errorMessageList = document.createElement('ul');
    errorMessageList.id = `error-message-list-${dispCount}`
    errorMessageList.className = "error-message-list";
    errorMessageList.classList.add("error-message-list");
    errorMessageDiv.appendChild(errorMessageList);
    
    const dispositivoNombreLabel = document.createElement('label');
    dispositivoNombreLabel.setAttribute('for', `nombre-disp-${dispCount}`);
    dispositivoNombreLabel.textContent = 'Nombre del dispositivo:';
    
    const dispositivoNombreInput = document.createElement('input');
    dispositivoNombreInput.setAttribute('maxlength', '80');
    dispositivoNombreInput.setAttribute('size', '80');
    dispositivoNombreInput.setAttribute('id', `nombre-disp-${dispCount}`);
    dispositivoNombreInput.setAttribute('name', `nombre-disp-${dispCount}`);
    dispositivoNombreInput.classList.add('nombre-disp');
    
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', `descripcion-${dispCount}`);
    descriptionLabel.textContent = 'Descripción:';
    
    const descriptionTA = document.createElement('textarea');
    descriptionTA.classList.add("descripcion");
    descriptionTA.setAttribute('id', `descripcion-${dispCount}`);
    descriptionTA.setAttribute('name', `descripcion-${dispCount}`);
    descriptionTA.setAttribute('rows','4');
    descriptionTA.setAttribute('cols','50');
    descriptionTA.setAttribute('placeholder','Ingrese Descripción');
    descriptionTA.setAttribute('oninput','enforceLimits(this)');
    
    const typeLabel = document.createElement('label');
    typeLabel.setAttribute('for', `tipo-${dispCount}`);
    typeLabel.textContent = 'Tipo:';
    
    const typeSelect = document.createElement('select');
    typeSelect.classList.add("tipo");
    typeSelect.setAttribute("id", `tipo-${dispCount}`);
    typeSelect.setAttribute("name", `tipo-${dispCount}`);
    const tpsoption0 = document.createElement('option');
    tpsoption0.textContent = 'Selecciona un tipo';
    tpsoption0.value = "";
    tpsoption0.disabled = true;
    tpsoption0.selected = true;
    typeSelect.appendChild(tpsoption0);
    
    typeOptionList.forEach(function (item) {
        const tpsoption = document.createElement('option');
        tpsoption.textContent = tpsoption.value = item;
        typeSelect.appendChild(tpsoption);
    });
    
    const anhosUso = document.createElement('label');
    anhosUso.textContent = 'Años de uso:';
    const anhosInput = document.createElement('input');
    anhosInput.setAttribute("id", `anhos-${dispCount}`);
    anhosInput.setAttribute("name", `anhos-${dispCount}`);
    anhosInput.type = 'text';
    anhosInput.setAttribute('maxlength', '2');
    anhosInput.setAttribute('size', '3');
    anhosInput.classList.add("anhos");
    
    const stateLabel = document.createElement('label');
    stateLabel.textContent = 'Estado funcionamiento:';
    const stateSelect = document.createElement('select');
    stateSelect.classList.add("estado");
    stateSelect.setAttribute("id", `estado-${dispCount}`);
    stateSelect.setAttribute("name", `estado-${dispCount}`);
    
    const nullStateOption = document.createElement("option");
    nullStateOption.value = "";
    nullStateOption.textContent = "Selecciona un estado";
    nullStateOption.disabled = true;
    nullStateOption.selected = true;
    
    stateSelect.appendChild(nullStateOption)
    stateOptionList.forEach(function (item) {
        const stateOption = document.createElement('option');
        stateOption.textContent = stateOption.value = item;
        stateSelect.appendChild(stateOption);
    });
    
    const fotoLabel = document.createElement('label');
    fotoLabel.textContent = 'Fotos del producto:';
    
    dispositivo.appendChild(errorMessageDiv);
    dispositivo.appendChild(dispositivoNombreLabel);
    dispositivo.appendChild(dispositivoNombreInput);
    dispositivo.appendChild(descriptionLabel);
    dispositivo.appendChild(descriptionTA);
    dispositivo.appendChild(typeLabel);
    dispositivo.appendChild(typeSelect);
    dispositivo.appendChild(anhosUso);
    dispositivo.appendChild(anhosInput);
    dispositivo.appendChild(stateLabel);
    dispositivo.appendChild(stateSelect);
    dispositivo.appendChild(fotoLabel);
    for (let i = 0; i < 3; i++) {
        const fotoInput = document.createElement('input');
        const fotoLabel = document.createElement('label');
        fotoInput.type = 'file';
        fotoInput.id = "file-input-" + i + "-" + dispCount; // + (dispCount*3 + i);
        fotoInput.name = "file-input-" + i + "-" + dispCount;
        fotoInput.classList.add("file-input");
        fotoInput.accept = ".jpg, .jpeg, .png, .gif";
        fotoLabel.setAttribute('for', fotoInput.id);
        fotoLabel.setAttribute('id', fotoInput.id.replace('input', 'label'));
        fotoLabel.classList.add('custom-file-input');
        fotoLabel.textContent = "Seleccionar Archivo";
        dispositivo.appendChild(fotoLabel);
        dispositivo.appendChild(fotoInput);
        fotoInput.addEventListener('change', function() {
            const file = fotoInput.files[0]; 
            if (file) {
                fotoLabel.textContent = file.name; 
                fotoLabel.classList.add('file-input-filename');
            } else {
                fotoLabel.textContent = 'Seleccionar Archivo'; 
                fotoLabel.classList.remove('file-input-filename');
            }
        });
    };

    
    const remove = document.createElement('button');
    remove.id = "remove-"+dispCount;
    remove.classList.add("button");
    remove.textContent = 'Eliminar dispositivo';
    remove.onclick = function(){
        dispositivo.remove();
    };
    dispositivo.appendChild(remove)

    document.getElementById("contenedor-dispositivos").appendChild(dispositivo);
    
    dispCount++;
};

function enforceLimits(textarea) {
    const maxLines = textarea.rows;
    const maxColumns = textarea.cols;
    const lines = textarea.value.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length > maxColumns) {
            lines[i] = lines[i].slice(0, maxColumns);
        }
    }

    if (lines.length > maxLines) {
        textarea.value = lines.slice(0, maxLines).join('\n');
    } else {
        textarea.value = lines.join('\n');
    }
}
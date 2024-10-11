function removeMessages(holder_list_id) {
    let list = document.getElementById(holder_list_id); // ul
    list.innerHTML = '';
}
function addMessage(holder_list_id, message) {
    let list = document.getElementById(holder_list_id); // ul
    if (list) {
        let messageElement = document.createElement('li');
        messageElement.textContent = message;
        list.appendChild(messageElement);
    } else {
        alert
        console.error(`Element with ID ${holder_list_id} not found.`);
    }
}


function validarForm(event) {
    console.log("prev");
    event.preventDefault();
    let valid = true;
    const validDonante      = validarDonante();
    const validDispositivos = validarDispositivos();
    console.log("post");
    if (!validDonante) {
        valid = false;
    }
    if (!validDispositivos) {
        valid = false;
    }

    return valid
}




function validarDonante() {
    let valid = true;

    const divError = document.getElementById('error-message-div-usr');
    const listError = document.getElementById('error-message-list-usr');
    removeMessages(listError.id);
    divError.style.display = 'none';
    
    const inputNombre = document.getElementById("nombre");
    const validNombre = validarNombre(inputNombre.value);
    if (!validNombre) {
        inputNombre.classList.add("invalid-input");
        valid = false;
        addMessage(listError.id, "El nombre de usuario no es válido");
        divError.style.display = '';
    } else {
        inputNombre.classList.remove("invalid-input");
    }

    const inputMail = document.getElementById("mail");
    const validMail = validarCorreo(inputMail.value);
    if (!validMail) {
        inputMail.classList.add("invalid-input");
        valid = false;
        addMessage(listError.id, "El correo electrónico no es válido");
        divError.style.display = '';
    } else {
        inputMail.classList.remove("invalid-input");
    }

    const inputCelular = document.getElementById("celular");
    const validCelular = validarCelular(inputCelular.value);
    if (!validCelular) {
        inputCelular.classList.add("invalid-input");
        valid = false;
        addMessage(listError.id, "El número de telefono no es válido");
        divError.style.display = '';
    } else {
        inputCelular.classList.remove("invalid-input");
    }

    const inputRegion = document.getElementById("region");
    const validRegion = validarRegion(inputRegion.value);
    if (!validRegion) {
        inputRegion.classList.add("invalid-input");
        valid = false;
        addMessage(listError.id, "La región no es válida");
        divError.style.display = '';
    } else {
        inputRegion.classList.remove("invalid-input");
    }

    const inputComuna = document.getElementById("comuna");
    const validComuna = validarComuna(inputComuna.value);
    if (!validComuna) {
        inputComuna.classList.add("invalid-input");
        valid = false;
        addMessage(listError.id, "La comuna no es válida");
        divError.style.display = '';
    } else {
        inputComuna.classList.remove("invalid-input");
    }

    return valid;
}




// TODO
function validarDispositivos() {
    let valid = true;
    const dispositivos = document.querySelectorAll("#contenedor-dispositivos .dispositivo");
    dispositivos.forEach(disp => {
        
        const divError = disp.querySelector(".error-message-div");
        const listError = divError.querySelector(".error-message-list");
        removeMessages(listError.id);
        divError.style.display = 'none';
        
        const inputNombre = disp.querySelector("input.nombre-disp");
        const selectType  = disp.querySelector("select.tipo");
        const inputAnhos  = disp.querySelector("input.anhos");
        const selectState = disp.querySelector("select.estado");
        const inputsImgs  = disp.querySelectorAll("input.file-input");
        
        const validNombre = dispValidarNombre(inputNombre.value);
        console.log("Prev");
        const validType = dispValidarType(selectType.value);
        console.log("Post");
        const validAnhos = dispValidarAnhos(inputAnhos.value);
        const validState = dispValidarState(selectState.value);
        const validImgs = dispValidarImgs(inputsImgs); 
        
        if (!validNombre) {
            inputNombre.classList.add("invalid-input");
            valid = false;
            addMessage(listError.id, "El nombre del dispositivo no es válido");
            divError.style.display = '';
        } else {
            inputNombre.classList.remove("invalid-input");
        }
        if (!validType) {
            selectType.classList.add("invalid-input");
            valid = false;
            addMessage(listError.id, "El tipo del dispositivo no es válido");
            divError.style.display = '';
        } else {
            selectType.classList.remove("invalid-input");
        }
        if (!validAnhos) {
            inputAnhos.classList.add("invalid-input");
            valid = false;
            addMessage(listError.id, "Los años de uso ingresados no son válidos");
            divError.style.display = '';
        } else {
            inputAnhos.classList.remove("invalid-input");
        }
        if (!validState) {
            selectState.classList.add("invalid-input");
            valid = false;
            addMessage(listError.id, "El estado del dispositivo no es válido");
            divError.style.display = '';
        } else {
            selectState.classList.remove("invalid-input");
        }
        if (!validImgs) {
            inputsImgs.forEach(inp => {
                inp.classList.add("invalid-input");
                const label = inp.id.replace('input', 'label');
                const labelElement = disp.querySelector(`label#${label}`);
                labelElement.classList.add("invalid-input");
            });
            valid = false;
            addMessage(listError.id, "Las imágenes del dispositivo no son válidas");
            divError.style.display = '';
        } else {
            inputsImgs.forEach(inp => {
                inp.classList.add("invalid-input");
                const label = inp.id.replace('input', 'label');
                const labelElement = disp.querySelector(`label#${label}`);
                labelElement.classList.remove("invalid-input");
            });
        }
    });

    return valid
};





function dispValidarImgs(allImg) {
    if (!allImg || allImg.length === 0) return false;

    let validFiles = [];
    let typeValid = true;

    for (const input of allImg) {
        for (const file of input.files) {
            validFiles.push(file);
            let fileFamily = file.type.split("/")[0];
            typeValid &&= (fileFamily === "image" || file.type === "application/pdf");
        }
    }

    let lengthValid = validFiles.length >= 1 && validFiles.length <= 3;

    return lengthValid && typeValid;
};







function dispValidarState(state) {
    
    let stateOptionList = [
        "Funciona perfecto",
        "Funciona a medias",
        "No Funciona",
    ]
    return stateOptionList.includes(state);
};

function dispValidarAnhos(anhos) {
    return anhos >= 1 && anhos <= 99;
};

function dispValidarType(tipo) {
    typeOptionList = [
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
    ];
    return typeOptionList.includes(tipo);
};

function dispValidarNombre(nombre) {
    return validarNombre(nombre);
};





function validarComuna(comuna) {
    const region = document.getElementById('region').value;
    if (validarRegion(region)) {
        return comuna !== "";
    } else return false;
};

function validarRegion(region) {
    return region !== "";
};

function validarCelular(celular) {
    const formato2 = /^[29]\d{8}$/;
    celular = celular.replace(/\s+/g, '');
    return (celular.length == 9 && formato2.test(celular)) || celular.length == 0;
};

function validarCorreo(correo) {
    if (!correo) return false;
    let lengthValid = correo.length > 15; 
    lengthValid &&= correo.length <= 30;  

    let re = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let formatValid = re.test(correo);

    return lengthValid && formatValid;
};

function validarNombre(nombre) {
    if(!nombre) return false;
    let lengthValid = nombre.trim().length >= 3 && nombre.trim().length <= 80;
    return lengthValid;
};
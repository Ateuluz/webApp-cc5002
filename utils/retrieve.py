from flask import Flask, request
import re
import database.database as db
from utils.validations import *

def retrieve_ids() -> dict:
    pattern = r'nombre-disp-(\d+)'
    results = {}
    
    for field_name in request.form:
        match = re.match(pattern, field_name)
        if match:
            # Extract the number from the field name
            number = match.group(1)
            # Retrieve the value associated with this field
            value = request.form[field_name]
            # Store in results
            results[number] = value

    return results


def retrieve_contacto():
    """ nom - ml - cel - reg - com """
    nombre      = request.form.get("user-nombre")
    mail        = request.form.get("user-mail")
    celular     = request.form.get("user-celular")
    region      = request.form.get("user-region")
    comuna      = request.form.get("user-comuna")
    
    if validate_user(nombre, mail, celular, region, comuna):
        return {
            "nombre":nombre,
            "mail":mail,
            "celular":celular,
            "region":region,
            "comuna":comuna
        }
    
    return {}
    
    
def retrieve_dispositivo(id):
    """ nom - desc - tp - ans - est """
    # request.form.get(f"{id}")
    nombre      = request.form.get(f"nombre-disp-{id}")
    descripcion = request.form.get(f"descripcion-${id}")
    tipo        = request.form.get(f"tipo-{id}")
    anos        = request.form.get(f"anhos-{id}")
    estado      = request.form.get(f"estado-{id}")
    
    if validate_dispositivo(nombre, estado, tipo, anos):
        return {
            "nombre_disp":nombre, 
            "descripcion":descripcion, 
            "tipo":tipo, 
            "anos_uso":anos, 
            "estado":estado
        }
    
    return {}


def retrieve_uploads(id):
    upload1 = request.files.get(f"file-input-0-"+id)
    upload2 = request.files.get(f"file-input-1-"+id)
    upload3 = request.files.get(f"file-input-2-"+id)
    print(upload1, "Upload 1 test")
    return [a for a in [upload1,upload2,upload3] if a and a.filename != '']
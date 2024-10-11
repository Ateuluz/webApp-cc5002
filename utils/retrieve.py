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
    nombre      = request.form.get("user-nombre")
    mail        = request.form.get("user-mail")
    celular     = request.form.get("user-celular")
    region      = request.form.get("user-region")
    comuna      = request.form.get("user-comuna")
    
    if validate_user(nombre, mail, celular, region, comuna):
        return [nombre, mail, celular, region, comuna]
    
    return []
    
    
def retrieve_dispositivo(id):
    """ img00 = request.form.get('file-input-0-0') """
    # request.form.get(f"{id}")
    nombre      = request.form.get(f"nombre-disp-{id}")
    descripcion = request.form.get(f"descripcion-${id}")
    tipo        = request.form.get(f"tipo-{id}")
    anos        = request.form.get(f"anhos-{id}")
    estado      = request.form.get(f"estado-{id}")
    
    if validate_dispositivo(nombre, estado, tipo, anos):
        return [nombre, descripcion, tipo, anos, estado]
    
    return []



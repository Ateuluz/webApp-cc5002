from flask import Flask, request, render_template, redirect, url_for, session, jsonify
from utils.validations import * #TODO
from database import database as db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os

import re

from utils.retrieve import *

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)


app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'W9n7T4V5bK6B0___3Kj4D4N0Kq6D9Pl6')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/agregar_donacion', methods=['GET', 'POST'])
def agregar_donacion():
    if request.method == "POST":
        nombre = request.form.get('user-nombre')
        print(nombre)
        img00 = request.form.get('file-input-0-0')
        print(img00)
        
        results = retrieve_ids()
        print(results.keys())
        
        contacto_info = retrieve_contacto()
        if not contacto_info:
            print("my bad bro")
            return render_template('agregar_donacion.html')
        
        contact_id = db.getContactoID(contacto_info["mail"])
        
        if contact_id is None:
            
            print("Adding contact")
            
            ci = contacto_info
            print(db.getComunaID(ci["comuna"], ci["region"]))
            db.addContacto(ci["nombre"],ci["mail"],ci["celular"],db.getComunaID(ci["comuna"], ci["region"]))
            
            contact_id = db.getContactoID(contacto_info["mail"])
        
        else:
            
            print("==> HELLO!!")
        
        for id in results.keys():
            print(retrieve_dispositivo(id))
            print("Uploads: ", retrieve_uploads(id))
            archivos = retrieve_uploads(id)
            parchivs = []
            
            for archivo in archivos:
                filename = hashlib.sha256(
                secure_filename(archivo.filename) # nombre del archivo
                .encode("utf-8") # encodear a bytes
                ).hexdigest()
                
                extension = filetype.guess(archivo).extension
                
                img_filename = f"{filename}.{extension}"
                
                archivo.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))
                
                parchivs.append((img_filename, archivo.filename))
            
            db.addDispositivo(contact_id, **retrieve_dispositivo(id), archivos=parchivs)
            
            
        
        return render_template('agregar_donacion.html')
        
    return render_template('agregar_donacion.html')

@app.route('/ver_dispositivos/<page>')
def ver_dispositivos(page):
    #TODO num
    dispositivos = db.getDispositivos(int(page)*5,5)
    
    data = []
    
    for i,disp in enumerate(dispositivos):
        """ tipo; nombre_disp; estado; foto """
        
        ruta = db.getFileName(disp["id"])[0]['ruta_archivo']
        print(">>> Archivo on Ver_disp:", ruta)
        
        d = {
            "id": disp["id"],
            "nombre": disp["nombre"],
            "estado": disp["estado"],
            "tipo": disp["tipo"],
            "comuna_name": disp["comuna_name"],
            "path": f"uploads/{ruta}",
        }
        data.append(d)
    
    nend = len(dispositivos) != 0
    
    return render_template('ver_dispositivos.html', page=int(page), dispositivos=data, nend=nend)

@app.route('/informacion_dispositivo/<idx>', methods=['POST', 'GET'])
def informacion_dispositivo(idx):
    
    if request.method == 'POST':
        return redirect(url_for("informacion_dispositivo", idx=idx))
    else:
        dispositivo = db.getDispositivo(idx)
    
    return render_template("informacion_dispositivo.html")
    

if __name__ == '__main__':
    app.run(debug=True)

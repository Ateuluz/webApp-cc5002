from flask import Flask, request, render_template, redirect, url_for, session, jsonify
from utils.validations import * #TODO
from database import database as db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os

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
    return render_template('agregar_donacion.html')

@app.route('/ver_dispositivos')
def ver_dispositivos():
    dispositivos = []
    return render_template('ver_dispositivos.html', dispositivos=dispositivos)

if __name__ == '__main__':
    app.run(debug=True)

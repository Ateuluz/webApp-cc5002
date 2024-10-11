import pymysql as msql
import json
import datetime

with open('database/querys.json','r') as qs:
    QUERY_DICT = json.load(qs)

def getConnection():
    return msql.connect(
        host="localhost",
        user="cc5002",
        password="programacionweb",
        database="tarea2",
        charset='utf8',
        cursorclass=msql.cursors.DictCursor  # Optional: Use DictCursor for more readable results
    )
    
def getDispositivos(idx, l):
    conn = getConnection()
    cursor = conn.cursor()
    # query = QUERY_DICT["get_dispositivos"]
    query = QUERY_DICT["get_dispositivos_n"]
    cursor.execute(query+str(idx)+','+str(l))
    dispositivos = cursor.fetchall()  # Store the result in a variable
    cursor.close()  # Close the cursor
    return dispositivos

def getDispositivo(idx):
    conn = getConnection()
    cursor = conn.cursor()
    # query = QUERY_DICT["get_dispositivos"]
    query = QUERY_DICT["get_dispositivos_u"]
    cursor.execute(query, (idx,))
    dispositivos = cursor.fetchall()  # Store the result in a variable
    cursor.close()  # Close the cursor
    return dispositivos
        
def addDispositivo(contacto_id, nombre_disp, descripcion, tipo, anos_uso, estado, archivos):
    """ dispositivo -> id:int, contacto_id:int, nombre:varchar(80), descripcion:varchar(300), tipo:enum(...), anos_uso:int, estado:enum(...) """
    """ contacto    -> id:int, nombre:varchar(80), email:varchar(30), celular:varchar(15), comuna_id:int, fecha_creacion:datetime """
    """ archivo     -> id:int, ruta_archivo:varchar(300), nombre_archivo:varchar(300), dispositivo_id:int """
    """ comentario  -> id:int, nombre:varchar(80), texto:varchar(300), fecha:varchar(45), dispositivo_id:int """
    """ comuna      -> id:int, nombre:varchar(200), region_id:int """
    """ region      -> id:int, nombre:varchar(200) """
    conn = getConnection()
    try:
        
        cursor = conn.cursor()

        cursor.execute(QUERY_DICT["add_dispositivo"], (contacto_id, nombre_disp, descripcion, tipo, anos_uso, estado))
        
        dispositivo_id = cursor.lastrowid

        #TODO
        print("Archivos all:",archivos)
        for archivo in archivos:
            print(" Single", archivo)
            #db.create_img(img_filename, disp_img.filename, disp[0])
            ruta_archivo, nombre_archivo = archivo
            cursor.execute(QUERY_DICT["add_archivo"], (ruta_archivo, nombre_archivo, dispositivo_id))

        conn.commit()

    except Exception as e:
        conn.rollback()
        raise e
    finally:
        cursor.close()
    pass

def getContactoID(mail):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_contact"], (mail,))
    contacto_id = cursor.fetchone()
    contacto_id = contacto_id['id'] if contacto_id else contacto_id
    cursor.close()
    return contacto_id

def addContacto(nombre, mail, numero, comuna_id):
    """ contacto    -> id:int, nombre:varchar(80), email:varchar(30),
    celular:varchar(15), comuna_id:int, fecha_creacion:timestamp """
    conn = getConnection()
    cursor = conn.cursor()
    texto_fecha_hora = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    cursor.execute(QUERY_DICT["add_contact"],  (nombre, mail, numero, comuna_id, texto_fecha_hora))
    conn.commit()
    cursor.close()

def getComunaID(name,region):
    conn = getConnection()
    cursor = conn.cursor()
    print("==> ", cursor.execute(QUERY_DICT["get_comuna_by_name"],  (name,)))
    comuna_id = cursor.fetchone()['id']
    cursor.close()
    return comuna_id

def getFileName(dispID):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute("SELECT ruta_archivo FROM archivo WHERE dispositivo_id = %s", (dispID,))
    archivos = cursor.fetchall()
    cursor.close()
    return archivos

# TODO
def getComments(id):
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comments_for"], (id,))
    comments = cursor.fetchall()
    cursor.close()
    return comments

def getAllInfo(id):
    """ d.id ; d.nombre ; d.tipo ; d.descripcion ; d.anos_uso ; d.estado ; com.nombre ; reg.nombre ; cont.nombre ; cont.email ; cont.celular """
    conn = getConnection()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_all_info"], (id,))
    info = cursor.fetchone()
    cursor.close()
    return info

def addComment(id, nombre, texto):
    conn = getConnection()
    cursor = conn.cursor()
    fecha = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    cursor.execute(QUERY_DICT['add_comentario'], (nombre, texto, fecha, id))
    conn.commit()
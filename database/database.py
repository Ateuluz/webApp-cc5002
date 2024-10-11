import pymysql as msql
import json

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
    
def getDispositivos():
    conn = getConnection()
    cursor = conn.cursor()
    query = QUERY_DICT["get_dispositivos"]
    cursor.execute(query)
    dispositivos = cursor.fetchall()  # Store the result in a variable
    cursor.close()  # Close the cursor
    return dispositivos

def fetchDevices():
    conn = getConnection()
    if conn is None:
        return []

    try:
        dispositivos = getDispositivos()
        return dispositivos
    finally:
        conn.close()  # Close the connection here
        
def addDispositivo(contacto_mail, nombre_disp, descripcion, tipo, anos_uso, estado, archivos):
    """ dispositivo -> id:int, contacto_id:int, nombre:varchar(80), descripcion:varchar(300), tipo:enum(...), anos_uso:int, estado:enum(...) """
    """ contacto    -> id:int, nombre:varchar(80), email:varchar(30), celular:varchar(15), comuna_id:int, fecha_creacion:datetime """
    """ archivo     -> id:int, ruta_archivo:varchar(300), nombre_archivo:varchar(300), dispositivo_id:int """
    """ comeentario -> id:int, nombre:varchar(80), texto:varchar(300), fecha:varchar(45), dispositivo_id:int """
    """ comuna      -> id:int, nombre:varchar(200), region_id:int """
    """ region      -> id:int, nombre:varchar(200) """
    conn = getConnection()
    try:
        
        cursor = conn.cursor()

        cursor.execute(QUERY_DICT["add_dispositivo"], (contacto_id, nombre_disp, descripcion, tipo, anos_uso, estado))
        
        dispositivo_id = cursor.lastrowid

        for archivo in archivos:
            ruta_archivo, nombre_archivo = archivo
            cursor.execute(QUERY_DICT["add_archivo"], (ruta_archivo, nombre_archivo, dispositivo_id))

        conn.commit()

    except Exception as e:
        conn.rollback()
        raise e
    finally:
        cursor.close()
    pass

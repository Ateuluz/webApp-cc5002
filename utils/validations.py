import re
import filetype

from database.database import QUERY_DICT, getConnection

def validate_conf_img(conf_img):
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    # check if a file was submitted
    if conf_img is None:
        return False

    # check if the browser submitted an empty file
    if conf_img.filename == "":
        return False
    
    # check file extension
    ftype_guess = filetype.guess(conf_img)
    if ftype_guess.extension not in ALLOWED_EXTENSIONS:
        return False
    # check mimetype
    if ftype_guess.mime not in ALLOWED_MIMETYPES:
        return False
    return True


def validate_user(nombre, mail, celular, region, comuna):
    print(1)
    if not validate_nombre  (nombre):                   return False
    print(2)
    if not validate_mail    (mail):                     return False
    print(3)
    if not validate_celular (celular):                  return False
    print(4)
    if not validate_region_comuna   (region, comuna):   return False
    print(5)
    return True


def validate_dispositivo(nombre, estado, tipo, anos):
    if not validate_nombre  (nombre):   return False
    if not validate_estado  (estado):   return False
    if not validate_tipo    (tipo):     return False
    if not validate_anos    (anos):     return False
    return True

# ========== Individual ========== # ========== Individual ========== # ========== Individual ========== #

def validate_nombre(nombre):
    if not nombre:
        return False
    length_valid = len(nombre.strip()) >= 3 and len(nombre.strip()) <= 80
    return length_valid


def validate_estado(estado):
    estado_option_list = [
        "Funciona perfecto",
        "Funciona a medias",
        "No Funciona",
    ]
    return estado in estado_option_list


def validate_tipo(tipo):
    tipo_option_list = [
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
    return tipo in tipo_option_list


def validate_anos(anos):
    return 1 <= anos <= 99


def validate_mail(mail):
    if not mail:
        return False
    length_valid = 15 < len(mail) <= 30
    re_mail = r"^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    format_valid = re.match(re_mail, mail)
    return length_valid and bool(format_valid)


def validate_celular(celular):
    celular = celular.replace(" ", "")
    formato2 = r"^[29]\d{8}$"
    return (len(celular) == 9 and re.match(formato2, celular)) or len(celular) == 0


def validate_region_comuna(region_name, comuna_name):
    conn = getConnection() 
    cursor = conn.cursor()

    query_region = QUERY_DICT["validate_region"]
    cursor.execute(query_region, (region_name,))
    region = cursor.fetchone()
    
    print(region, region_name, comuna_name)

    if region:
        query_comuna = QUERY_DICT["validate_comuna"]
        cursor.execute(query_comuna, (comuna_name, region[0]))
        comuna = cursor.fetchone()
        cursor.close()
        conn.close()
        return bool(comuna)  # Return True if comuna exists and is linked to the region
    else:
        cursor.close()
        conn.close()
        return False  # Region does not exist




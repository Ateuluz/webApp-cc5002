import re
import filetype

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
    if not validate_nombre  (nombre):   return False
    if not validate_mail    (mail):     return False
    if not validate_celular (celular):  return False
    if not validate_region  (region):   return False
    if not validate_comuna  (comuna):   return False
    return True


def validate_dispositivo(nombre, estado, tipo, anos):
    if not validate_nombre  (nombre):   return False
    if not validate_estado  (estado):   return False
    if not validate_tipo    (tipo):     return False
    if not validate_anos    (anos):     return False
    return True


def validate_nombre(nombre):
    pass


def validate_estado(estado):
    pass


def validate_tipo(tipo):
    pass


def validate_anos(anos):
    pass


def validate_mail(mail): 
    pass


def validate_celular(celular):
    pass


def validate_region(region): 
    pass


def validate_comuna(comuna): 
    pass


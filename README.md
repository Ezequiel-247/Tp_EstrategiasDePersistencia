#TP_EstrategiasDePersistencia


ejemplos de como hacer post o update con publicaciones -> hacer primero post de usuario

{
    "usuarioId": 1,
  "descripcion": "Este es un nuevo post",
  "fechaDePublicacion": "2023-10-01T12:00:00Z"
}


post o update con usuario

{
  "nombre": "usuario123",
  "email": "usuario@example.com",
  "contraseña": "123123123"
}

post o update con tags 

{
    "nombre": "Deporstessss"
}

post o update con comentario -> hacer primero post de user y publicacion


{
    "contenido": "holaaaaa",
    "fechaDeComentario": "2023-10-01T12:00:00.000Z",
    "usuarioId": 1,
    "publicacionId": 1
}


post de un tag a una publi  -> hacer primero post de etiqueta y publicacion

{
    "etiquetaId" : 1,
    "publicacionId": 1
}
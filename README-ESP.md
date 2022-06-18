# Toc

- [Toc](#toc)
- [BuscadorDeReservas](#buscadordereservas)
- [instrucciones](#instrucciones)
- [Endpoints](#endpoints)
- [Modelo entidad Relación](#modelo-entidad-relación)
  - [Autor](#autor)
      - [Luciano Germani :it:](#luciano-germani-it)

# BuscadorDeReservas

*Si lo prefieres puedes leer esto en [Ingles](README.md)*

Este proyecto consiste en replicar la parte Backend de un buscador de reservas de hoteles.

# instrucciones

Para poder lanzar peticiones necesitamos utilizar Postman (https://www.postman.com) y apuntar a este servidor de heroku: https://buscadordereservas.herokuapp.com/

![Postman](imgReadme/Postman.png)

# Endpoints

A continuación se especifican el método a introducir en Postman, y lo que debemos introducir a continuación de la raiz para acceder a cada uno de los endpoints.

GET / reservas --> Muestra todas las reservas
GET / reservas / :id --> Muestra todos los ID de las reservas
GET / reservas / dniCLiente / :dni --> Muestra todas las reservas por dni del cliente
GET / reservas / hotel / :hotelId --> Muestra todas las reservas por cada hotel
GET / reservas / entrada / :fechaEntrada --> Muestra todas las reservas de una determinada fecha de entrada
GET / reservas / salida / :fechaSalida --> Muestra todas las reservas de una determinada fecha de salida

# Modelo entidad Relación

A continuación el modelo entidad relación del proyecto

![Entidad-Relación](imgReadme/modeloEntidadRelacion.png)

## Autor 	

#### [Luciano Germani](https://github.com/Germanilu) :it:

---------------------

[:top:](#toc)


const express = require('express')
const film_routes = express.Router()
/*Crear una nueva pelicula */
film_routes.post('/film', (req, res) => {})
/*Listar todas las pelicula existentes */
film_routes.get('/films', (req, res) => {})
/*Consultar una pelicula en especifico*/
film_routes.get('/films/:filmId', (req, res) => {})
/*Actualizar una pelicula en especifico*/
film_routes.put('/films/:filmId', (req, res) => {})
/*Eliminar una pelicula en especifico*/
film_routes.delete('/films/:filmId', (req, res) => {})

module.exports = film_routes
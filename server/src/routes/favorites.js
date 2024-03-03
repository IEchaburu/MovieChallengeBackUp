const { Router } = require("express");
const getFavoriteMovies = require("../handlers/Favorites/getFavMovies");

const favorite_router = Router();

favorite_router.get('/favorite_movies/:id', getFavoriteMovies);


module.exports = favorite_router;
const deleteMovie = require("../../controllers/Favorites/deleteFavMovies");

const deleteFavMovie = async (req, res) => {
    const { userid, movieid } = req.body;

    try {
        const response = await deleteMovie(userid, movieid);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = deleteFavMovie;
const postMovie = require("../../controllers/Favorites/postFavMovies");

const postFavMovie = async (req, res) => {
    const { userid, movieid } = req.body;

    try {
        const response = await postMovie(userid, movieid);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = postFavMovie;
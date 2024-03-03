const favMovies = require("../../controllers/Favorites/getfavMovies");

const getFavoriteMovies = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await favMovies(id);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = getFavoriteMovies;
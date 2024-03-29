const movieGenres = require("../../controllers/Movies/getMovieGenres")

const getMGenres = async (req, res) => {
    try {
        const response = await movieGenres();

        res.status(200).json(response);

    } catch (error) {
        res.status(404).json({error:error.message})
    }
};

module.exports = getMGenres;
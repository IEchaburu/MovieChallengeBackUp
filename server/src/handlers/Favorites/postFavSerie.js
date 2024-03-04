const postSerie = require("../../controllers/Favorites/postFavSeries");

const postFavSerie = async (req, res) => {
    const { userid, serieid } = req.body;

    try {
        const response = await postSerie(userid, serieid);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = postFavSerie;
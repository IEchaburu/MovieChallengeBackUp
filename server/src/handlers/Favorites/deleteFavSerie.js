const deleteSerie = require("../../controllers/Favorites/deleteFavSeries");

const deleteFavSerie = async (req, res) => {
    const { userid, serieid } = req.body;

    try {
        const response = await deleteSerie(userid, serieid);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = deleteFavSerie;
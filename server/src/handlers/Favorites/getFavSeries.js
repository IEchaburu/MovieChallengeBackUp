const favSeries = require("../../controllers/Favorites/getFavSeries");

const getFavoriteSeries = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await favSeries(id);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = getFavoriteSeries;
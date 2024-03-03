const userLogIn = require("../../controllers/Users/userLogIn");

const user_login = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        const response = await userLogIn(email, password);

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = user_login;
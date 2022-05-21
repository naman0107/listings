const client = require('../../database');
const queries = require("./queries");


const authenticateUser = (req, res) => {
    if(!req.body) {
        res.status(203).send(
            {
                message: "username and password is required"
            }
        )
    }
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(203).send({
            message: "please enter username and password"
        })
    }
    client.query(queries.authenticateUser, [username, password], (error, result) => {
        if (!error && result.rowCount === 1) {
            res.status(202).json(
                {
                    "message": "success",
                    "data": result.rows
                }
            );
        } else {
            res.status(401).send(
                {
                    message: 'Unauthorized'
                }
            )
        }
    })
}

module.exports = {
    authenticateUser
};
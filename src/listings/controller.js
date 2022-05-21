const client = require("../../database");
const { v4: uuidv4 } = require('uuid');
const queries = require("./query");


//get all listings
const getAllListings = (req, res) => {
    client.query(queries.getAllListings, (error, result) => {
        if (!error) {
            res.status(202).json(
                {
                    "message": "success",
                    "data": result.rows
                }
            );
        } else {
            res.status(401).send(
                {
                    message: 'semothing went wrong'
                }
            )
        }
    })
}


//create a new listing
const createListing = (req, res) => {
    if(!req.body) {
        res.status(203).send(
            {
                message: "missing required parameters"
            }
        )
    }
    const uuid = uuidv4();
    const {name, price, description} = req.body;

    if (!name || !price) {
        res.status(203).send(
            {
                message: "name and price is required"
            }
        )
    }

    client.query(queries.createListing, [uuid, name, price, description], (error, result) => {
        if (!error) {
            res.status(202).json(
                {
                    "message": "success",
                    "data": [{
                        "uuid": uuid,
                        "name": name,
                        "price": price,
                        "description": description
                    }]
                }
            );
        } else {
            res.status(401).send(
                {
                    message: 'semothing went wrong'
                }
            )
        }
    })
}

module.exports = {
    getAllListings,
    createListing
}
const getAllListings = "SELECT * from listings";
const createListing = "INSERT into listings (uuid, name, price, description) values($1,$2,$3,$4)";


module.exports = {
    getAllListings,
    createListing
}
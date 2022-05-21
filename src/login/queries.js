const authenticateUser = "SELECT * from login where username=$1AND password=$2"


module.exports = {
    authenticateUser
}
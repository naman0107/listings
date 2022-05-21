const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "naman",
    post: 543/2,
    password: '',
    database: 'naman'
})

module.exports  = client;
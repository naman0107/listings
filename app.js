const express = require('express');
const app = express();
const PORT = 8080;
const client = require('./database');
const loginRoutes = require('./src/login/routes');
const listingRoutes = require('./src/listings/routes');

// middleware
app.use(express.json());

//connecting to db
(async () => {
    try {
        await client.connect();
        console.log('DB connected');
    } catch (error) {
        console.log(error);   
    }
})();

// default url
app.get('/', (req, res) => {
    res.send("Hello World")
});

// login routes
app.use('/api/v1/login', loginRoutes);

// listing routes
app.use('/api/v1/listing', listingRoutes);

app.listen(
    PORT,
    () => console.log(`App is running on ${PORT}`)
);
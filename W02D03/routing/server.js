
const express = require('express')
const app = express()

// ! Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// !!!!!!!!!!!!!!!

// Import Routes
const routes = require('./routes/routes')
routes(app)


app.listen(8000, () => {
    console.log('>>> SERVER IS RUNNING ON PORT 8000 <<<');
})
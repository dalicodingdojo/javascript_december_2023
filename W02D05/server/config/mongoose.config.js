const mongoose  = require('mongoose');
require('dotenv').config()
const db = process.env.db
const username = process.env.atlas_username
const password = process.env.atlas_password
 
const uri = `mongodb+srv://${username}:${password}@firstdb.y2idbiu.mongodb.net/?retryWrites=true&w=majority`
 
mongoose.connect(uri)
.then(() => console.log( `CONNECTION WITH DATABASE :  ${db} ESTABLISHED WITH SUCCESS`))
.catch(error => console.log("CONNECTION WITH DATABASE FAILED", error))
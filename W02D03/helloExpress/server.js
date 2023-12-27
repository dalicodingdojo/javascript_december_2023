/*
from flask import Flask

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
*/
const express = require('express')
// console.log('Express : ', express, '-------------------------------------------');
const app = express()

// ! Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// !!!!!!!!!!!!!!!

// console.log('APP ', app);
// console.log('APP CREATED WITH SUCCESS *-*-*-*-*-*-*-*-*-');
/*
users.splice(1, 2)
users =  [
    { firstName: "Reimu", lastName: "Hakurei" },
    1- deleted
    2 - deleted
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
]
*/ 
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
// Health route 
app.get('/', (requestObject, responseObject) => {
    responseObject.status(200).json({ message: 'Server is Up and Running', ok: true })
})

/*
Get All Users
Method : GET
host : localhost
url : http://localhost/api/users
res : array [object]
*/
app.get('/api/users', (req, res) => {
    res.status(200).json({ data: users, message: "All Users List", ok: true })
})
/*
Get One User
Method : GET
host : localhost
url : http://localhost/api/users/:id
res : object
*/
app.get('/api/users/:id', (req, res) => {
    console.log('USER ID :', req.params);
    const { id } = req.params;
    if (id < 0 || id > users.length) {
        res.status(404).json({ message: "Usr Not Found", ok: false })
    } else {
        res.status(200).json({ data: users[id], message: "ID Received ", ok: true })
    }
})

/*
CREATE a User
Method : POST
host : localhost
url : http://localhost/api/users
res : [object]
*/
app.post('/api/users', (req, res) => {
    // console.log(req.body);
    users.push(req.body)
    res.status(201).json({ data: users, newUser: req.body, message: "User created successfully", ok: true })
})


/*
DELETE a User
Method : DELETE
host : localhost
url : http://localhost/api/users/:id
res : object
*/
app.delete('/api/users/:id', (req, res) => {
    console.log("ID user to delete", req.params);
    const {id} = req.params;
    const deletesUser  = users[id]
    users.splice(id, 1)
    res.status(200).json({ data: deletesUser, message: "User deleted with success", ok: true })
})


/*
Update a User
Method : PUT
host : localhost
url : http://localhost/api/users/:id
res : object => {oldUser, updatedUser}
*/
app.put('/api/users/:id', (req, res) => {
    /*
    Update requestObject : {
        params :{id:1},
        body :{firstName:"John",lastName:"Smith"}
    }
    */ 
    console.log("ID user to delete", req.params);
    const{id} = req.params
    // user:object
    /*
    users[1] = { firstName: "Reimu", lastName: "Hakurei"}
    req.body = { "firstName": "Updated FN V02"}
    {...users[id],...req.body} = > {firstName: "Reimu", lastName: "Hakurei", "firstName": "Updated FN V02"}
    */
    users[id] = {...users[id],...req.body}
    res.status(200).json({ data:  users[id], message: "User Updated with success", ok: true })
})



app.listen(8000, () => {
    console.log('>>> SERVER IS RUNNING ON PORT 8000 <<<');
})
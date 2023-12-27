
const users = require('../models/model')

module.exports = (app) => {
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
        const { id } = req.params;
        const deletesUser = users[id]
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
        const { id } = req.params
        users[id] = { ...users[id], ...req.body }
        res.status(200).json({ data: users[id], message: "User Updated with success", ok: true })
    })
}

module.exports = (app) =>{

    const user = require('../controllers/user')

    app.post('/contacto/create', user.create)
    app.get('/contacto/get', user.findAll)
    app.get('/contacto/get/:id', user.findOne)
    app.put('/contacto/update/:id', user.update)
    app.delete('/contacto/delete/:id', user.delete)


}

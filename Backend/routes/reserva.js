module.exports = (app) =>{

    const reserva = require('../controllers/reserva')

    app.post('/reserva/create', reserva.create)
    app.get('/reserva/get', reserva.findAll)
    app.get('/reserva/get/:id', reserva.findOne)
    app.put('/reserva/update/:id', reserva.update)
    app.delete('/reserva/delete/:id', reserva.delete)


}
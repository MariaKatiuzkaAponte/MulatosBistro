const { countDocuments } = require('../models/reserva')
const Reserva = require('../models/reserva')  /* Requiero el modelo de mi documento ce reserva*/


exports.create = (req, res) => {
 
    const nReserva = new Reserva({     

        nombre: req.body.nombre,  
        numero: req.body.numero,
        email: req.body.email,
        personas: req.body.personas,
        fecha: req.body.fecha,
        hora: req.body.hora,
        celebracion: req.body.celebracion

    })

    nReserva.save().then(   

       data =>{
           res.send(data)   
       }
       ).catch(

        error =>{
            res.status(500).send({
                message: error.message || 'Error al realizar la reservación'
            })
        }
       )

}

/* Para buscar todos */

exports.findAll = (req, res) =>{  
    Reserva.find({ })
   
    .then((data)=>{
        res.send(data)
    }) .catch((err)=>{
        res.status(500).send({
            message: "Hubo un error en el servidor"
        })
    })
   }

   /* Para buscar uno en especifico */

exports.findOne = (req, res) =>{
    const id = req.params.id 
    Reserva.findById(id)
    .then((data)=>{
        if(!data) {
            res.status(404).send({message: "No se encontro el usuario con el id" + id})
        } else {
            res.send(data)
        }
    })
    .catch((err)=>{
        res.status(500).send({message: "error en el servidor"})
    })
}

/* Para actualizar */


exports.update = (req, res) => {
    const id = req.params.id
    if(!req.body){
        return res.status(400).send({message: "El cuerpo de la petición no puede ir vacio"})
    } 
    Reserva.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede editar un usuario inexistente"})
        } else {
            res.send({message: "La reserva se ha actualizado"})
        }
    }) .catch ((err)=> {
        res.status(500). send({message: "Hubo un problema en el servisor"})

    })
}

/* Para eliminar */

exports.delete = (req,res) =>{
    const id = req.params.id 

    Reserva.findByIdAndRemove(id)
    .then ((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede eliminar el documento porque no se encontró"})
        } else {
            res.send({message: "Se eliminó el registro de reservación exitosamente"})
        }
    }) 
    .catch((error) =>{
        res.status(500).send({message: "Hay un problema en el servidor"})
    })
}

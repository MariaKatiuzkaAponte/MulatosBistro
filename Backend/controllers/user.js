const { countDocuments } = require('../models/user')
const User = require('../models/user')  /* Requiero el modelo de mi documento */


exports.create = (req, res) => {
 
    const nUser = new User({     

        nombre: req.body.nombre,  
        apellido: req.body.apellido,
        email: req.body.email,
        mensaje: req.body.mensaje

    })

    nUser.save().then(   

       data =>{
           res.send(data)   
       }
       ).catch(

        error =>{
            res.status(500).send({
                message: error.message || 'Error al enviar el mensaje'
            })
        }
       )

}

/* Para buscar todos */

exports.findAll = (req, res) =>{  /* Funcion para encontrar todos los documentos */
    User.find({ })
   
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
    User.findById(id)
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
    User.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede editar un usuario inexistente"})
        } else {
            res.send({message: "El mensaje se ha actualizado"})
        }
    }) .catch ((err)=> {
        res.status(500). send({message: "Hubo un problema en el servisor"})

    })
}

/* Para eliminar */

exports.delete = (req,res) =>{
    const id = req.params.id 

    User.findByIdAndRemove(id)
    .then ((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede eliminar el documento porque no se encontró"})
        } else {
            res.send({message: "Se eliminó el usuario exitosamente"})
        }
    }) 
    .catch((error) =>{
        res.status(500).send({message: "Hay un problema en el servidor"})
    })
}
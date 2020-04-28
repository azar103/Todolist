const Item = require('../models/item')

exports.createItem = (req, res, next) => {
       delete req.body._id
       const item = new Item({ ...req.body })
       item.save()
           .then(() => res.status(201).json({ message: 'Objet crée'}))
           .catch((error ) => res.status(400).json({ error })) 
}


exports.editItem = (req, res, next) => {
    Item.updateOne({ _id: req.params.id }, { ...req.body, _id:req.params.id })
        .then(() => res.status(200).json({message: 'Objet modifié'}))
        .catch((error) => res.status(400).json({error}))
}

exports.deleteItem = (req, res, next) => {
    Item.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({message: 'Objet supprimé'}))
        .catch((error) => res.status(400).json({error}))
}


exports.getAllItems = (req, res, next) => {
    Item.find()
        .then((items) => res.status(200).json(items))
        .catch((error) => res.status(400).json({error}))
}
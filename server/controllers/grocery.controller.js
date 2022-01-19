const Grocery = require("../models/grocery.models");


module.exports = {
    index: (req,res) => {
        Grocery.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    create: (req,res) => {
        Grocery.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    show: (req,res) => {
        Grocery.find({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    update: (req,res) => {
        Grocery.updateOne({_id:req.params.id},req.body,{runValidators:true})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    destroy: (req,res) => {
        Grocery.deleteOne({_id:req.params.id})
            .then(data => res.redirect('/api/groceries'))
            .catch(err => res.status(404).json({errors:err.errors}));
    }
}
const User = require("../models/user.model");

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');



module.exports = {
    index: (req,res) => {
        User.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    login: async(req,res) => {
        const user = await User.findOne({ email:req.body.email });

        if(user === null) {
            return res.sendStatus(400);
        }

        // const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if(req.body.password != user.password) {
            return res.sendStatus(401);
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        res.cookie("usertoken", userToken, { httpOnly: true })
            .json({ msg: "success!" });
    },
    register: (req,res) => {
        User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
            res.cookie("usertoken", userToken, secret, { httpOnly: true })
                .json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    show: (req,res) => {
        User.find({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    update: (req,res) => {
        User.updateOne({_id:req.params.id},req.body,{runValidators:true})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    },
    destroy: (req,res) => {
        User.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors:err.errors}));
    }
}
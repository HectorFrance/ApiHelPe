const mongoose = require("mongoose")
const { response } = require("express")
const usuario = mongoose.model("Usuarios")

exports.showOne = async (req, res) => {
	const user = await usuario.findOne({email: req.params.email,});
    console.log(req.params.email);
    res.json(user);
}

exports.listAll = async (req, res) => {
	const user = await usuario.find();
	res.json(user);
}

exports.createOne = async (req, res) => {
	  	const user = await usuario.create(req.body);
	  	return res.send("Usuario Criado");
	  }
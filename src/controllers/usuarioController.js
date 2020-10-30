const mongoose = require("mongoose")
const { response } = require("express")
const usuario = mongoose.model("Usuarios")

exports.showOne = async (req, res) => {
	const user = await usuario.findOne({
			email: req.body.email, 
			senha: req.body.senha
	});

	console.log(req.body.email + " - " + 
			req.body.senha);

    if (user !== null) {
		console.log("Sucesso");
		res.json(user);
	} else {
		console.log("Erro");
		res.status(404);
	}
}

exports.listAll = async (req, res) => {
	const user = await usuario.find();
	res.json(user);
}

exports.createOne = async (req, res) => {
	  	const user = await usuario.create(req.body);
	  	return res.send("Usuario Criado");
	  }
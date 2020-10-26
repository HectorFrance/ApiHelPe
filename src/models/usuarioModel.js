const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
	nome: {
		type: String,
		required: "Favor informa o nome do usuario"
	},
	email: {
		type: String,
		required: "Favor informa o email do usruario"
	},
	sexo:{
		type:[{
			type:String,
			enum: ["M","F","não informado"]
		}],
		default: ["não informado"]
	},
	senha: {
		type: String,
		required: "Favor informar a senha"
	}
})

module.exports = mongoose.model("Usuarios", UsuarioSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const enderecoSchema = new Schema({
	rua: {
		type: String,
		required: "Informe a rua"
	},
	numero: {
		type: String,
		required:"informe o numero"
	},
	bairro: {
		type: String,
		required: "informe o bairro"
	},
	cidade: {
		type: String,
		required: "Informe a cidade"
	},
	uf: {
		type: String,
		required: "informe  a sigla do estado" 
	},
	cep: {
		type: String ,
		required: "informe o cep"
	}
})

const HospitalSchema = new Schema({
	nome: {
		type: String,
		required: "Favor informa o nome do Hospital"
	},
	endereco: enderecoSchema,
	telefone:{
		type: String,
		required: "informe o telefone do Hospital"
	}
})

module.exports = mongoose.model("Hospital", HospitalSchema)
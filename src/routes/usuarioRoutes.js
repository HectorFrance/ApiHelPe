module.exports = function(app){
	const usuarios = require("../controllers/usuarioController")
	 app.route("/usuarios")
	 .get(usuarios.listAll)
	 .post(usuarios.createOne)

	 app.route("/usuario")
	 .post(usuarios.showOne)

	 app.route("/usuario/:id")
	 .put()
}
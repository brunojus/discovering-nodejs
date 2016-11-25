
module.exports = function (app){


	app.get('/noticia',function (req,res) {

			var connection = app.config.dbConnection();
			var Noticia = new app.app.models.Noticias(connection);

			Noticia.getNoticia(function(error,result){
				res.render('noticias/noticia',{noticia:result});
			});
	
	});
};
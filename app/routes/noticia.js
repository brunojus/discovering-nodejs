
module.exports = function (app){


	app.get('/noticia',function (req,res) {

			var connection = app.config.dbConnection();
			var Noticia = app.app.models.Noticias;

			Noticia.getNoticia(connection,function(error,result){
				res.render('noticias/noticia',{noticia:result});
			});
	
	});
};
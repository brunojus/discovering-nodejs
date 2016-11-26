module.exports.noticias = function(app,req,res){

	var connection = app.config.dbConnection();
	var Noticias = new app.app.models.Noticias(connection);

	Noticias.getNoticias(function(error,result) {
		res.render('noticias/noticias',{noticias:result});

	});	
}

module.exports.noticia = function(app,req,res){
	var connection = app.config.dbConnection();
	var Noticia = new app.app.models.Noticias(connection);

	Noticia.getNoticia(function(error,result){
		res.render('noticias/noticia',{noticia:result});
	});
}

module.exports = function (app){


	app.get('/noticias',function (req,res) {

		var connection = app.config.dbConnection();
		var Noticias = new app.app.models.Noticias(connection);

		Noticias.getNoticias(function(error,result) {
					res.render('noticias/noticias',{noticias:result});

		});	
	});
};
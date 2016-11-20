
module.exports = function (app){


	app.get('/noticias',function (req,res) {

		var connection = app.config.dbConnection();
		var Noticias = app.app.models.Noticias;

		Noticias.getNoticias(connection,function(error,result) {
					res.render('noticias/noticias',{noticias:result});

		});	
	});
};
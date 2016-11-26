module.exports.formulario_inclusao_noticia = function(app,req,res){
	res.render('admin/form_add_noticia',{validacao:{},noticia:{}});
}

module.exports.noticias_salvar = function(app,req,res){

		var noticia = req.body;

		req.assert('titulo','O Título é obrigatório').notEmpty();
		req.assert('resumo','O Resumo é obrigatório').notEmpty();
		req.assert('resumo','O Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','O autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatória').notEmpty().isDate({format:'YYYY-MM-DD'});
		req.assert('noticia','O campo noticia é obrigatório').notEmpty();

		var erros = req.validationErrors();

		if(erros){

			res.render('admin/form_add_noticia',{validacao:erros});
			return;
		}



		var connection = app.config.dbConnection();
		var Noticias = new app.app.models.Noticias(connection);

		Noticias.salvarNoticia(noticia, function(error,result) {
				res.redirect('/noticias');

		});	

}
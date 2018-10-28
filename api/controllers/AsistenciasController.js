
module.exports = {
	list: function(req, res){
    //console.log(req.params.id);
      Asistencias.find({clase:req.params.id}).exec(function(err, asistencias){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('lista_asistencias', {asistencias:asistencias});
            //console.error(asistencias);
        });
    },
    create:function(req, res){
				var id_asi = req.body.id_asi;
				var clase = req.body.clase;
				var fecha = req.body.fecha;
				var runEstudiante = req.body.runEstudiante;

        Asistencias.create({id_asi:id_asi, clase:clase, fecha:fecha, runEstudiante:runEstudiante}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/asistencias/list');
        });
    },
    delete: function(req, res){
        Asistencias.destroy({id_asi:req.params.id_asi}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/asistencias/list');
        });

        return false;
    },
    update: function(req, res){
        //var title = req.body.title;
        //var body = req.body.body;

        var id_asi = req.body.id_asi;
				var clase = req.body.clase;
				var fecha = req.body.fecha;
				var runEstudiante = req.body.runEstudiante;

        Asistencias.update({id_asi: req.params.id_asi},{clase:clase, fecha:fecha, runEstudiante:runEstudiante}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/asistencias/list');
        });

        return false;
    }
};

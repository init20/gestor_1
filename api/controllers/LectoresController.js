module.exports = {
	list:function(req, res){
        Lectores.find({}).exec(function(err, lectores){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('list', {lectores:lectores});
        });
    },
    add: function(req, res){
        res.view('add');
    },
    create:function(req, res){


				var id_lec = req.body.id_lec;
				var ip = req.body.ip;
				var facultad = req.body.facultad;
				var sala = req.body.sala;

        Lectores.create({id_lec:id_lec, ip:ip, facultad:facultad, sala:sala}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/lectores/list');
        });
    },
    delete: function(req, res){
        Lectores.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/lectores/list');
        });

        return false;
    },
    edit: function(req, res){
        Lectores.findOne({id:req.params.id}).exec(function(err, lector){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('edit', {lector:lector});
        });
    },
    update: function(req, res){
        //var title = req.body.title;
        //var body = req.body.body;

				var id_lec = req.body.id_lec;
				var ip = req.body.ip;
				var facultad = req.body.facultad;
				var sala = req.body.sala;
				var estado = req.body.estado;
        Lectores.update({id: req.params.id},{id_lec:id_lec, ip:ip, facultad:facultad, sala:sala, estado:estado}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/lectores/list');
        });

        return false;
    },

};

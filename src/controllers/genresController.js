const db = require("../database/models/index");

module.exports = {
    list: (req,res) => {
        db.Generos.findAll()
            .then(genres => res.render( "genresList", { genres } ))
            .catch(error => res.send(error))
    },
    detail: (req,res) => {
        db.Generos.findByPk(req.params.id)
            .then(genre => res.render( "genresDetail", { genre } ))
            .catch(error => res.send(error))
    }
}
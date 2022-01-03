const db = require("../database/models/index");

module.exports = {
    list: (req,res) => {
        db.Peliculas.findAll()
            .then(movies => res.render( "moviesList", { movies } ))
            .catch(error => res.send(error))
    },
    detail: (req,res) => {
        db.Peliculas.findByPk(req.params.id)
            .then(movie => res.render( "moviesDetail", { movie } ))
            .catch(error => res.send(error))
    },
    new: (req,res) => {
        db.Peliculas.findAll({
            order: [
                ["release_date", "desc"]
            ]
        })
            .then(movies => res.render( "newestMovies", { movies } ))
            .catch(error => res.send(error))
    },
    recomended: (req,res) => {
        db.Peliculas.findAll({
            order: [
                ["rating", "desc"]
            ],
            limit: 5
        })
            .then(movies => res.render( "recommendedMovies", { movies } ))
            .catch(error => res.send(error))
    }
}
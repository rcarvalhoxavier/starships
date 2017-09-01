var models = require('../models');
var express = require('express');
var router = express.Router();
const swapi = require('../lib/swapi-node');


router.post("/starships", function (req, res) {
    models.starships.create({
        name: req.body.name,
        model: req.body.model,
        manufacturer: req.body.manufacturer,
        cost_in_credits: req.body.cost_in_credits,
        length: req.body.length,
        max_atmosphering_speed: req.body.max_atmosphering_speed,
        crew: req.body.crew,
        passengers: req.body.passengers,
        cargo_capacity: req.body.cargo_capacity,
        consumables: req.body.consumables,
        hyperdrive_rating: req.body.hyperdrive_rating,
        MGLT: req.body.MGLT,
        starship_class: req.body.starship_class,
        created: req.body.created,
        edited: req.body.edited,
        url: req.body.url
    }).then(function () {
        res.json({ message: 'Starship created!' });
    });
});


router.route('/starships')
    .get(function (req, res) {
        models.starships.findAll().then(starship => {
            res.json(starship);
        });
    });

router.get('/starships/:id/destroy', function (req, res) {
    models.starships.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.json({ message: 'startship destroied!' });
    });
});

router.route("/starships/populate").post(function (req, res) {
    swapi.getStarship().then((result) => {
        result.results.forEach(function (element) {
            console.log(element.name);
            models.starships.create({
                name: element.name,
                model: element.model,
                manufacturer: element.manufacturer,
                cost_in_credits: element.cost_in_credits,
                length: element.length,
                max_atmosphering_speed: element.max_atmosphering_speed,
                crew: element.crew,
                passengers: element.passengers,
                cargo_capacity: element.cargo_capacity,
                consumables: element.consumables,
                hyperdrive_rating: element.hyperdrive_rating,
                MGLT: element.MGLT,
                starship_class: element.starship_class,
                created: element.created,
                edited: element.edited,
                url: element.url
            });
        }, this);
    }).then(function () {
        res.json({ message: 'Starships created!' });
    });
});

module.exports = router;
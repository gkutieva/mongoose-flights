const Flight = require("../models/flight");

module.exports = {
    index,
    create,
    show,
    new: newFlight,
};

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights});
    })
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights/new');
    });
}

function show(req, res) {
    const flight = Flight.getOne(req.params.id);
    res.render('flights/show', {flight});
}

function newFlight(req, res) {
    res.render('flights/new');
}
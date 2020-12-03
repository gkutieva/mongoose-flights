const Flight = require("../models/flight");
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    create,
    new: newFlight,
};

function index(req, res) {
    Flight.find({}).sort({departs: 1}).exec(function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render(`flights/show`, { flight, tickets })
        });
    });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}
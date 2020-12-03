const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTicket,
}

function create(req, res) {
    req.body.flight = req.params.id;
    console.log(req.body);
    Ticket.create(req.body, function (err, ticket) {
        if(err) console.log(err);
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    res.render('tickets/new', {
        id: req.params.id
    });
}


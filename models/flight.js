const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DIA', 'LAX', 'SAN']
    },

    arrival: {
        type: Date
    },
});

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DIA', 'LAX', 'SAN'],
        default: 'DIA'
    },

    destinations: [destinationSchema],
    
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },

    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);

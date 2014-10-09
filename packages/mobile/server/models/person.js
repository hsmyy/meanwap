/**
 * Created by fc on 14-10-9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    userid : {
        type : Number,
        require : true
    },
    persons : {
        type : [{
            name : {
                type : String,
                require : true
            },
            data : {
                type : [{
                    key : String,
                    value : String
                }]
            }
        }]
    }
});

exports.Person = mongoose.model('Person', personSchema);
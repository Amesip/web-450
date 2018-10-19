// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var composerSchema = new Schema({

    firstName: String,
    lastName: String,
    musicGenre: String

});

// define the composer model

var Composer = mongoose.model("Composer", composerSchema);

// expose the composer to calling files

module.exports = {Composer: Composer};
var express = require('express');
var router = express.Router();
var composer = require ('../mongoose-models/composer');


router.get('/list', function(req, res, next) {
  composer.find(function(err, composers) {
    if (err) return next (err);
    res.json(composers);
  });
});

//code for returning one composer by id

router.get('/view/:id', function(req, res) {

  var id = request.params._id

  composer.findById(id, function(err, composers) {
    if (err) return next (err);
    res.json(composers);
  });
});

//code to add a new composer to the database

router.post('/process', function(req, res) {
  if (!request.body.txtFName && !request.body.txtLName) {
    res.status(400).send("Entries must have a name");
    return;
  }

  var firstName = request.body.txtFName;
  console.log(firstName);
  var lastName = request.body.txtLName;
  console.log(lastName);
  var musicGenre = request.body.txtMGenre;
  console.log(musicGenre);

  var newComposer = new composer.Composer({
    firstName: firstName,
    lastName: lastName,
    musicGenre: musicGenre
  });
  
  newComposer.save(function(err, composer) {
    if (error) throw error;
    console.log(firstName + lastName + " saved successfully!");
    res.json(composers);
  });
});

//code to update a composer to the database

router.put('/update', function(req, res) {
  if (!request.body.txtFName && !request.body.txtLName) {
    res.status(400).send("Entries must have a name");
    return;
  }

  var firstName = request.body.txtFName;
  console.log(firstName);
  var lastName = request.body.txtLName;
  console.log(lastName);
  var musicGenre = request.body.txtMGenre;
  console.log(musicGenre);
  var id = request.params._id;

  var Composer = new composer.Composer({
    firstName: firstName,
    lastName: lastName,
    musicGenre: musicGenre,
    id: id
  });
  
  Composer.save(function(error, composers) {
    if (error) throw error;
    console.log(firstName + lastName + " updated successfully!");
    res.json(composers);
  });
});

//code to delete a composer in the database

router.delete('/delete', function(req, res) {

  if (!request.body.txtFName && !request.body.txtLName) {
    res.status(400).send("Entries must have a name");
    return;
  }

  var firstName = request.body.txtFName;
  console.log(firstName);
  var lastName = request.body.txtLName;
  console.log(lastName);
  var musicGenre = request.body.txtMGenre;
  console.log(musicGenre);
  var id = request.params._id;

  composer.findByIdAndRemove(id, function(err, composers) {
    if (err) return next (err);
    res.json(composers);
  });
});

module.exports = router;

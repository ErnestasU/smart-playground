'use strict';
const mongo = require('../database/mongo.js');

exports.get_all_trainers = function (req, res) {
    mongo.db.collection("trainers").find({}).toArray(function (err, trainers) {
        if (err) throw err;
        res.json({trainers});
    });
}

exports.get_trainer_by_ref = function (req, res) {
    mongo.db.collection("trainers").findOne({"ref": req.params.ref}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
}
'use strict';

exports.get_all_trainers = function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = process.env.MONGODB_CONNECTION;

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("smart-playground-db");

        dbo.collection("trainers").find({}).toArray(function (err, trainers) {
            if (err) throw err;
            db.close();
            res.json({trainers});
        });
    });
}

exports.get_trainer_by_ref = function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = process.env.MONGODB_CONNECTION;

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("smart-playground-db");

        dbo.collection("trainers").findOne({"ref" : req.params.ref}, function (err, result) {
            if (err) throw err;
            db.close();
            res.json(result);
        });
    });
}
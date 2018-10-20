'use strict';

exports.get_item = function (req, res) {


    var MongoClient = require('mongodb').MongoClient;
    var url = process.env.MONGODB_CONNECTION;
    
    // res.json({ "itemId": req.params.itemId })

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("smart-playground-db");

        dbo.collection("smart-playground-collection").findOne({}, function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json({ "itemId": result.id })
        });
    });

};

exports.update_item = function (req, res) {
    res.json(req.body);
};

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



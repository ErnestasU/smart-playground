'use strict';

exports.get_item = function (req, res) {


    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://user1:0357k8gFZAqg6L8I@cluster0-rfkil.mongodb.net/test?retryWrites=true";

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




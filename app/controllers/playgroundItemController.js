'use strict';
const mongo = require('../database/mongo.js');

exports.get_all_trainers = function (req, res) {
    mongo.db.collection("trainers").find({}).toArray(function (err, trainers) {
        if (err) throw err;
        res.json({trainers});
    });
}

exports.get_all_public_fields = function (req, res) {
    mongo.db.collection("fields").find({}).toArray(function (fieldsError, fields) {
        if (fieldsError) throw fieldsError;
        mongo.db.collection("trainers").find({}).toArray(function (trainersErr, trainersArray) {
            if (trainersErr) throw trainersErr;
            const trainers = {}

            trainersArray.forEach(trainer => {
                const temp = {...trainer}
                delete temp._id
                trainers[trainer._id] = temp;
            })

            mongo.db.collection("muscle-groups").find({}).toArray(function (muscleErr, muscleGroupsArray) {
                if (trainersErr) throw trainersErr;
                const muscleGroups = {}

                muscleGroupsArray.forEach(muscleGroup => {
                    const temp = {...muscleGroup}
                    delete temp._id
                    muscleGroups[muscleGroup._id] = temp;
                })

                res.json({fields, trainers, muscleGroups});
            })
        })
    });
}

exports.get_trainer_by_ref = function (req, res) {
    mongo.db.collection("trainers").findOne({"ref": req.params.ref}, function (err, result) {
        if (err) throw err;
        if(result){
            res.json(result);
        }else{
            res.json({});
        }
    });
}
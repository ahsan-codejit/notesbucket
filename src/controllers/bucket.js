"use strict";
const Bucket = require('../models/bucket');

/*
 * GET /buckets route to retrieve all the buckets.
 */
function getBuckets(req, res) {
    //Query the DB and if no errors, send all the buckets
    let query = Bucket.find({});
    query.exec((err, buckets) => {
        if(err){
            res.send(err);
        } 
        //If no errors, send them back to the client
        res.json(buckets);
    });
}

/*
 * POST /bucket to save a new bucket.
 */
function createBucket(req, res) {
    //Creates a new bucket
    var newBucket = new Bucket(req.body);
    //Save it into the DB.
    newBucket.save((err,bucket) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Bucket successfully added!", bucket });
        }
    });
}

/*
 * GET /bucket/:id route to retrieve a bucket given its id.
 */
function getBucket(req, res) {
    Bucket.findById(req.params.id, (err, bucket) => {
        if(err) {
            res.send(err);
        }
        //If no errors, send it back to the client
        res.json(bucket);
    });     
}

/*
 * DELETE /bucket/:id to delete a bucket given its id.
 */
function deleteBucket(req, res) {
    Bucket.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Bucket successfully deleted!", result });
    });
}

/*
 * PUT /bucket/:id to updatea a bucket given its id
 */
function updateBucket(req, res) {
    Bucket.findById({_id: req.params.id}, (err, bucket) => {
        if(err) {
            res.send(err);
        }
        Object.assign(bucket, req.body).save((err, bucket) => {
            if(err) {
                res.send(err);
            }
            res.json({ message: 'Bucket updated!', bucket });
        }); 
    });
}

//export all the functions
module.exports = { getBuckets, createBucket, getBucket, deleteBucket, updateBucket };
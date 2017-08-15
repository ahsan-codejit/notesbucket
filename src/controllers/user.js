"use strict";
const User = require('../models/user');

/*
 * getUsers retrieves all the users.
 * if no errors, send them back
 */
function getUsers(req, res) {
    User.find({})
    .exec((err, users) => {
        if(err){
            res.send(err);
        }  else {
            res.json(users);
        }
        
    });
}

/*
 * createUser to create a new user.
 * if no errors, send it back to the client
 */
function createUser(req, res) {
    var newUser = new User(req.body);
    newUser.save((err,user) => {
        if(err) {
            res.send(err);
        }
        else { 
            res.json({message: "User successfully added!", user });
        }
    });
}

/*
 * getUser to retrieve an user given its id.
 * if no errors, send it back to the client
 */
function getUser(req, res) {
    User.findById(req.params.id, (err, user) => {
        if(err) {
            res.send(err);
        }
        //I
        res.json(user);
    });     
}

/*
 * deleteUser to delete a bucket given its id.
 */
function deleteUser(req, res) {
    User.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Bucket successfully deleted!", result });
    });
}

/*
 * updateUser to updatea a bucket given its id
 */
function updateUser(req, res) {
    User.findById({_id: req.params.id}, (err, user) => {
        if(err) {
            res.send(err);
        }
        Object.assign(user, req.body)
        .save((err, user) => {
            if(err) {
                res.send(err);
            }
            res.json({ 
                message: 'Bucket updated!', 
                user 
            });
        }); 
    });
}

//export all the functions
module.exports = { getUsers, createUser, getUser, deleteUser, updateUser };
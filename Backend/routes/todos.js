const mongoose = require('mongoose')
const { Todo } = require('../models/todo')
const express = require('express');

const router = express.Router();

router.post("/", async (req, res) => {
    
    const { name, author, isComplete, date, uid } = req.body;

    let todo = new Todo({
        name, author, isComplete, date, uid
    })
    try {
    todo = await todo.save();
        res.send(todo);
    } catch(error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;



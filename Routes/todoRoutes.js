const express = require('express'); // importing express    
const {
    todoAdd,
    todoGet,
    todoUpdate,
    todoDelete
} = require('../controllers/todoControllers') // importing todoControllers

const router = express.Router();    // creating Router

router.post("/addTodo", todoAdd)    // creating routes
router.get("/getTodos", todoGet)    // creating routes
router.patch("/updateTodo/:id", todoUpdate)   // creating routes
router.delete("/deleteTodo/:id", todoDelete)    // creating routes

module.exports = router
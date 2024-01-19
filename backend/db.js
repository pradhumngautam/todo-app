const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pradhumngautam:ocbszU1bBSMIc8Aj@cluster0.mojxgk8.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todo", todoSchema);
module.exports = {
    todo
}

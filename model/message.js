const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const model = mongoose.model("Message", messageSchema);

module.exports = model
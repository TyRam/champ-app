const mongoose = require("mongoode");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Role;
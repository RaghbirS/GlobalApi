const mongoose = require("mongoose");
// userName=apiglobal37;
// pass=apiglobal37;
const connection = mongoose.connect("mongodb+srv://apiglobal37:apiglobal37@cluster0.h3reutl.mongodb.net/new");

const allRowsSchema = mongoose.Schema({
    data:Object
})

const AllRowsModel = mongoose.model("AllData", allRowsSchema);

module.exports = {
    connection,
    AllRowsModel
}
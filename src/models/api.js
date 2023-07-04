import mongoose from "mongoose";

const apiSchema = new mongoose.Schema(
    {
        filme: {type: String, required:true},
        Ano:{type: String,required:true},
        ordem:{type: Number,required:true}
    }
)


const apis = mongoose.model('apis', apiSchema);

module.exports = apis;

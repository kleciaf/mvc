import mongoose from "mongoose";

const apiSchema = new mongoose.Schema(
    {
        filme: {type: String, required: true},
        ano: {type: String, required: true},
        ordem: {type: Number, required: true}
    }
)


const apis = mongoose.model('apis', apiSchema);

export default apis;



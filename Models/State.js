import { Schema, model } from "mongoose";

const collection = 'states';

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
})

const State = model(collection, schema);

export default State;
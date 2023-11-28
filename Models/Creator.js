import { Schema, model, Types } from 'mongoose';

const collection = 'creators';

const schema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    company: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    active: { type: Boolean, default: false },
    user_id: { type: Types.ObjectId, ref: 'users' },
}, {
    timestamps: true
})

const Creator = model(collection, schema);

export default Creator;
import { Schema, model, Types } from 'mongoose';

const collection = 'categories';

const schema = new Schema({
    name: { type: 'string', required: true },
    color: { type: 'string', required: true },
    admin_id: { type: Types.ObjectId, ref: 'users' },
}, {
    timestamps: true
});

const Category = model(collection, schema);

export default Category;
import { Schema, model, Types } from 'mongoose';

const collection = 'products';

const schema = new Schema({
    name: { type: String, required: true },
    category_id: { type: Types.ObjectId, ref: 'categories' },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    sex: { type: String, required: true },
    creator_id: { type: Types.ObjectId, ref: 'creators' },
    url_photo: { type: String, required: true },
}, {
    timestamps: true
})

const Product = model(collection, schema);

export default Product;
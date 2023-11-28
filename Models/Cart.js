import { Schema, model, Types } from "mongoose";

const collections = 'carts';

const schema = new Schema({
    user_id: { type: Types.ObjectId, ref: 'users', required: true },
    product_id: { type: Types.ObjectId, ref: 'products', required: true },
    state_id: { type: Types.ObjectId, ref: 'states', required: true },
    creator_id: { type: Types.ObjectId, ref: 'creators', required: true },
    quantity: { type: Number, required: true }
}, {
    timestamps: true
})

const Cart = model(collections, schema);

export default Cart;
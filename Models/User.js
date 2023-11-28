import { Schema, model, Types } from 'mongoose';

const collection = 'users';

const schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    role: { type: Number, default: 0 },
    photo: { type: String, default: 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png' },
    active: { type: Boolean, default: false }
}, {
    timestamps: true
});

const User = model(collection, schema);

export default User;
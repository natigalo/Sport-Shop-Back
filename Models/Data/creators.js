import 'dotenv/config.js';
import '../../config/database.js';
import Creator from '../Creator.js';

const creators = [{
    name: "Jannus",
    lastname: "Largo",
    company: "Nike",
    city: "Tulua",
    country: "Colombia",
    active:true,
    user_id: "6502155eb1d5cba7ec1e924b",
}, {
    name: "Santiago",
    lastname: "Vanegas",
    company: "Adidas",
    city: "Medellin",
    country: "Colombia",
    active:true,
    user_id: "6502155eb1d5cba7ec1e924c",
}, {
    name: "Andrea",
    lastname: "Prada",
    company: "Sneakers",
    city: "Villavicencio",
    country: "Colombia",
    active:true,
    user_id: "6502155eb1d5cba7ec1e924d",
},]

Creator.insertMany(creators);
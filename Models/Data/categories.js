import 'dotenv/config.js';
import '../../config/database.js';
import Category from '../Category.js';

const categories = [{
    name: "Accessories",
    color: "#E67F0D",
    admin_id: "6502155eb1d5cba7ec1e924f",
}, {
    name: "Sportswear",
    color: "#FFAE03",
    admin_id: "6502155eb1d5cba7ec1e924f",
}, {
    name: "Sports shoes",
    color: "#655A7C",
    admin_id: "6502155eb1d5cba7ec1e924f",
}, {
    name: "Sports backpacks",
    color: "#AB92BF",
    admin_id: "6502155eb1d5cba7ec1e924f",
}, {
    name: "Sports Equipment",
    color: "#AFC1D6",
    admin_id: "6502155eb1d5cba7ec1e924f",
},]

Category.insertMany(categories);

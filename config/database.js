import mongoose from "mongoose";

mongoose.connect(process.env.URLDB).then(() => console.log('Database Connection Established')).catch(error => console.log(error));
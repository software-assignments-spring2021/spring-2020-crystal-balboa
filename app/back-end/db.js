require('dotenv').config();
const mongoose = require('mongoose');



const Restaurant = new mongoose.Schema({
    name: String,
    location: String,
    price: String,
    rating: String,
    cuisine: String,
    date: Number,
    dateMonth: Number,
    dateDay: Number,
    dateYear: Number
});

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    name: String,
    zipCode: Number,
    history: [Restaurant],
    preferences: Object
});

mongoose.model('User', User);
mongoose.model('Restaurant', Restaurant);
mongoose.connect(process.env.DB_CONN, {useNewUrlParser: true, useUnifiedTopology: true});
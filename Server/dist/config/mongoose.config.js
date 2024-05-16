"use strict";
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/SavingsApp", {
    UseNewUrlParser: true,
}).then(() => console.log("connected"))
    .catch((e) => console.log(`${e}`));

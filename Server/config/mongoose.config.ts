const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/SavingsApp",{
    UseNewUrlParser: true,
}).then(()=> console.log("connected"))
.catch((e : object)=> console.log(`${e}`))


export {};
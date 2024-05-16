const express = require('express');
const app = express();
const dotEnv = require('dotenv');

dotEnv.config();
require('./config/mongoose.config');
const port =8000;

app.listen(port , ()=> console.log(`listening on port: ${port}`));





const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/ToDoRoute');
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Corrigido para cors()

mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to MongoDB...`))
    .catch((e) => console.log(e));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

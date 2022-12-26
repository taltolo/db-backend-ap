const express = require('express');
require('dotenv').config();
const networkRouter = require('./routes/networkRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.MONGODB_URI);
const url = process.env.MONGODB_URI;
console.log(typeof process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://127.0.0.1/ArcPlaner', {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  })
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((error) => {
    console.log('mongo error', error);
  });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/network/db', networkRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports = app;

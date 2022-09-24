const express = require('express');
require('dotenv').config();
const cors = require('cors');
const indexRouter = require('./routes/index');


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/v1", indexRouter);

// app.listen(port, () => {
//     console.log(`App listening on port ${port}!`)
// })

if (process.env.NODE_ENV !== 'test') {
    app.listen(port);
  }

module.exports = app;
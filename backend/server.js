const express = require('express');
const colors = require('colors')
const dotenc = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const {errorHandeler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalroutes"));
app.use("/api/users", require("./routes/userRoute"));
app.use(errorHandeler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
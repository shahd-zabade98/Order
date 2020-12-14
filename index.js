require("dotenv").config();
const express = require('express');
const app = express();
const Joi = require('joi');
const OrderRouter = require("./api/Order/Order.router");
app.use(express.json());
app.use("/api/Order", OrderRouter);
app.listen(process.env.APP_PORT, () =>{
    console.log("Server up and running on PORT:",process.env.APP_PORT);
});
/* IMPORTS */

// .ENV
require("dotenv").config();

// Public Routers
const cartRouter = require("./routes/cartRouter") 
const productRouter = require("./routes/productRouter")
const orderRouter = require("./routes/orderRouter")
const authRouter = require("./routes/authRouter")

// Private Routers
const productRouter_Admin = require("./routes/admin/productRouter_Admin")
const orderRouter_Admin = require("./routes/admin/orderRouter_Admin")
const authRouter_Admin = require("./routes/admin/authRouter_Admin")
const adminAuthRouter_Admin = require("./routes/admin/adminAuthRouter_Admin")


// Express Functions
const express = require("express");

// Cors Function
const cors = require("cors");


/* Server */

// CREATE & CONFIG SERVER
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


// Public Routes
app.use("/cart", cartRouter )
app.use("/products", productRouter)
app.use("/order", orderRouter)
app.use("/user", authRouter);

// Private Routes
app.use("/admin/products", productRouter_Admin)
app.use("/admin/order", orderRouter_Admin)
app.use("/admin/user", authRouter_Admin)
app.use("/admin/", adminAuthRouter_Admin)

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});
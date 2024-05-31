require("dotenv").config();
const cartRouter = require("./routes/cartRouter") 
const productRouter = require("./routes/productRouter")
const orderRouter = require("./routes/orderRouter")
const authRouter = require("./routes/authRouter")

//ROUTES ADMIN
const productRouter_Admin = require("./routes/admin/productRouter_Admin")
const orderRouter_Admin = require("./routes/admin/orderRouter_Admin")


//# EXPRESS & CORS
const express = require("express");
const cors = require("cors");

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

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});
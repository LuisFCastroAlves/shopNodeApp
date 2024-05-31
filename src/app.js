require("dotenv").config();
const cartRouter = require("./routes/cartRouter") 
const productRouter = require("./routes/productRouter")
const orderRouter = require("./routes/orderRouter")
const authRouter = require("./routes/authRouter")


//# EXPRESS & CORS
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


// ROUTES
app.use("/cart", cartRouter )
app.use("/products", productRouter)
app.use("/order", orderRouter)
app.use("/user", authRouter);

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});
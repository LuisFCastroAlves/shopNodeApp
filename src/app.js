require("dotenv").config();
const cartRouter = require("./routes/cartRouter") 

//# EXPRESS & CORS
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/cart", cartRouter )

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});
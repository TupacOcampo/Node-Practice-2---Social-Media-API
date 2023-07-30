const express = require("express");
const dbConnect = require("./config/dbConnection");
const dotEnv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

dbConnect();
app.use(express.json());
app.use("/api/v1/user/", require("./routes/userRoute"));
app.use("/api/v1/post/", require("./routes/postRoute"));


app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
});
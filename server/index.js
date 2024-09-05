const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => console.log(`Server is running on port ${port}`));

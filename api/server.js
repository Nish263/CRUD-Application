import express from "express";
const app = express();

const port = 8000;

// DATABASE CONNECTION
import { dbConnect } from "./src/config/db.js";
dbConnect();

app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running on http://localhost:${port}`);
});

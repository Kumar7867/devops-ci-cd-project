const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("DevOps Project App Running Successfully!");
});

app.get("/status", (req, res) => {
    res.json({ status: "OK", service: "DevOps App" });
});

app.listen(3000, () => console.log("Server started on port 3000"));


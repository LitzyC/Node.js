const { query } = require("express");
const express = require("express");
const app = express();

//app.get("/", (req, res) => {res.send("Hello Litzy ");});

app.get("/search", function(req, res){
    let searchName = req.query.search;
    res.send("Hello " + searchName);
})

app.listen(3000, () => console.log("Server is up and running"));

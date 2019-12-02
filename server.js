var express = require("express");
var routerProduct = require("./route/product")
const app = express();

app.use(express.json())


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/product", routerProduct);
app.get("/", (req, res)=>{
    res.send("welcome to my backend")
})

app.listen(9898, ()=>{
    console.log("server started at port 9898");
})

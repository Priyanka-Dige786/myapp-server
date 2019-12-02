var express = require("express")

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "172.18.4.74",
    user: "root",
    password: "root",
    database: "mydb1",
    port: 9099
});

connection.connect();

var router = express();

router.use(express.json());
router.get("/", (req, res)=>{
    var statement = `select * from product`;
    connection.query(statement, (err, data)=>{
        if(err == null)
        {
            res.send(JSON.stringify(data));
        }
        else
        {
            res.send(JSON.stringify(err));
        }
    })
})

router.post("/", (req, res)=>{
    var {title, description, price} = req.body;
    var statement = `insert into product (title, description, price) values('${title}', '${description}', '${price}')`;
    connection.query(statement, (err, data)=>{
        if(err == null)
        {
            res.send(JSON.stringify(data));
        }
        else
        {
            res.send(JSON.stringify(err));
        }
    })
})

module.exports = router;
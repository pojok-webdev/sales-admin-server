var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./js/db'),
    sql = require('./js/queries')
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    next()
})
    
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post("/save",(req,res) => {
    console.log("req.params",req.body)
    db.execute(sql.save(req.body), result => {
        console.log("save result",result)
        res.send(result)
    })
})
app.get("/get",(req,res) => {
    console.log("get",req.params)
    db.execute(sql.get(), result => {
        res.send(result)
    })
})
app.listen(process.env.PORT || 2019)
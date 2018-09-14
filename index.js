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
app.post("/visitsave",(req,res) => {
    console.log("req.body",req.body)
    db.execute(sql.visitsave(req.body), result => {
        console.log("visitsave result",result)
        res.send(result)
    })
})
app.get("/visitgets",(req,res) => {
    console.log("visitgets",req.params)
    db.execute(sql.visitgets(), result => {
        res.send(result)
    })
})
app.get("/visitget/:id",(req,res) => {
    console.log("visitget",req.params)
    db.execute(sql.visitget(req.params), result => {
        res.send(result)
    })
})
app.post("/visitupdate",(req,res) => {
    console.log("req.body",req.body)
    db.execute(sql.visitupdate(req.body), result => {
        console.log("visitupdate result",result)
        res.send(result)
    })
})
app.get("/visitremove/:id",(req,res) => {
    console.log("visitremove",req.params)
    db.execute(sql.visitremove(req.params), result => {
        res.send(result)
    })
})







app.post("/offersave",(req,res) => {
    console.log("req.body",req.body)
    db.execute(sql.offersave(req.body), result => {
        console.log("save result",result)
        res.send(result)
    })
})
app.get("/offergets",(req,res) => {
    console.log("offergets",req.params)
    db.execute(sql.offergets(), result => {
        res.send(result)
    })
})
app.get("/offerget/:id",(req,res) => {
    console.log("offerget",req.params)
    db.execute(sql.offerget(req.params), result => {
        res.send(result)
    })
})
app.post("/offerupdate",(req,res) => {
    console.log("req.body",req.body)
    db.execute(sql.offerupdate(req.body), result => {
        console.log("offerupdate result",result)
        res.send(result)
    })
})
app.get("/offerremove/:id",(req,res) => {
    console.log("offerremove",req.params)
    db.execute(sql.offerremove(req.params), result => {
        res.send(result)
    })
})

app.listen(process.env.PORT || 2019)
const express = require('express')
const {dBug} = require("./helper")
const {cors} = require("./midleware")
const app = express()
const https = require('https')
const path = require('path')
const fs = require('fs')


// set View Engine
// PUG
app.set('view engine','pug')
app.set('views','./template')

// app use
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({xtended: false, limit: "50mb"}))
app.use(cors)

app.get('/', function(req,res){
	dBug("GET...")	
	res.json({msg:"Hello World!"});
})

app.post('/data', function(req,res){
	res.json({msg:"There is a post method!"})
})

app.get('/xhr' , function(req,res){
	res.render("simple-xhr")
})


 const sslServer = https.createServer({
	key:fs.readFileSync(path.join(__dirname, 'ssl','key.pem')),
	cert:fs.readFileSync(path.join(__dirname,'ssl','cert.pem')),
	ca: [fs.readFileSync(path.join(__dirname,'ssl','ca.pem'))]
	
},app)

 sslServer.listen(3080, function(){

	dBug('Server run on port 3080 with ssl')

 })


//app.listen(3080, function(){
//	dBug('run')
//})
 


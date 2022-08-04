const express = require('express')
const app = express();


app.get('/', function(req,res){
	res.send("Hello World!");
});
app.post('/data', function(req,res){
	res.send("There is a post method!")
})



app.listen(3080);


var express = require('express')
var app = express()

app.get('/getInfo',function(req,res){
	var data = {
			errno:0,
			errmsg:'',
			data:{
				new_data:'这是getInfo新内容'
			}
		}
	res.send(JSON.stringify(data))
})

app.post('/postInfo',function(req,res){
	var data = {
			errno:0,
			errmsg:'',
			data:{
				new_data:'这是postInfo新内容'
			}
		}
	res.send(JSON.stringify(data))
})
var server = app.listen(3000,function(){
	var host = server.address().address
	var port = server.address().port
 
	console.log("应用实例，访问地址为 http://", host, port)
})
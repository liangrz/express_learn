同一路由的GET请求定义了两个路由
app.get('/user/:id',function (req, res, next){
	console.log('ID:', req.params.id);
	next();
}, function (req, res, next){
	res.send('User Info');
});

//处理 /user/:id
app.get('/user/:id', function (req, res, next){
	res.end(req.params.id);
});

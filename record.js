ͬһ·�ɵ�GET������������·��
app.get('/user/:id',function (req, res, next){
	console.log('ID:', req.params.id);
	next();
}, function (req, res, next){
	res.send('User Info');
});

//���� /user/:id
app.get('/user/:id', function (req, res, next){
	res.end(req.params.id);
});

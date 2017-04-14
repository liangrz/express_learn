//1、同一个路径建立两个同类请求的路由，如果没有next()，只会实现第一个
//2、res.send()输出页面只能在同一类的请求输出一次，二次请求会报错//Can't set headers after they are sent.

--
//例如访问localhost:3000/test


//----------/router/test.js
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
	console.log('first ask');
	res.send('this is a the test page');
	//next();
});

router.get('/', function (req, res){
	console.log('second ask');
	res.send('I am the next');
});

module.exports = router;

//----------/index.js
var express = require('express');
var app = express();
var test = require('./router/test.js');

app.use('/test', test);

app.listen(3000);

//观看后台，只输出

//first ask

//把//next()的备注斜杠去掉，再次刷新页面，观看后台，能看见

//first ask
//second ask
//但是同时还有报错
//Can't set headers after they are sent.
//字面意思，页面内容已经发送过后无法再发送

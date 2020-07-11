import Express from 'express';
import jwt from 'jsonwebtoken/index';

const router = Express.Router();

/**
 *  路由控制
 *  一 个应用中可以定义多个路由，我们可以控制以令其转向下一个路由，Express提供了第三个参数即next()函数。
 *  当一个模式不被匹配时，控制将被转回 Connect（Express基于Connect模块），同时中间件会继续按照它们在use()中增加的顺序来执行。
 *  当多个定义的路由都可能匹配同一个 URL时也是如此，除非某个路由并不调用next()且已将响应输出到客户端，否则它们也将按顺序执行。
 */

//app.all()方法可以对所有HTTP动作应用单一调用入口
//正则匹配
//app.get(/^\/users?(?:\/(\d+)(?:\.\.(\d+))?)?/, function(req, res){
//     res.send(req.params);
// });

router.post('/login', function(req, res, next) {
	const user = req.body;
	return login('', user)
		.then((user) => {
			console.log(user);
			res.setHeader('Authorization', user.token);
			res.json({
				code: 200,
				message: 'success',
				data: user,
			});
		});
});

router.post('/register', function(req, res, next) {
	const user = req.body;
	return register('', user)
		.then((user) => {
			res.json({
				code: 200,
				message: 'success',
				data: user,
			});
		});
});

router.get('/genders', (request, response) => {
	response.json({
		code: 200,
		message: 'success',
		data: [
			{id: 0, name: 'vip0'},
			{id: 1, name: 'vip1'}
		],
	})
});


module.exports = router;

export async function login(parentValue, { username, password }) {
	const userDetail = {
		id: 1,
		username: username,
		role: 'ADMIN',
	};
	const token = jwt.sign(userDetail, 'secret');
	return { ...userDetail, token: token };
}

export async function register(parentValue, { username, password }) {

	return 'success';
}

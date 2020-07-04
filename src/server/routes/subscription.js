import Express from 'express';

import product from '../../assets/product-id.json';
import subscriptions from '../../assets/subscriptions.json';

const router = Express.Router();

router.get('/list', (request, response) => {
	const type = request.query
	console.log(type)
	response.json(subscriptions)
})

router.post('/create', (request, response) => {
	const id = request.query.id
	console.log(id)
	response.json({
		code: 200,
		message: 'success',
		data: 'success',
	})
})

router.post('/remove', (request, response) => {
	const id = request.query.id
	console.log(id)
	response.json({
		code: 200,
		message: 'success',
		data: 'success',
	})
})

router.get('/:slug', (request, response) => {
	const id = request.params.slug
	console.log(id)
	response.json(product)
})

module.exports = router;

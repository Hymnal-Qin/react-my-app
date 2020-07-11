import Express from 'express';
import product from '../../assets/product-id.json';
import products from '../../assets/products.json';

const router = Express.Router();

router.get('/list', (request, response) => {
	response.json(products);
});

router.get('/types', (request, response) => {
	response.json({
		code: 200,
		message: 'success',
		data: [
			{ id: 0, name: '电器' },
			{ id: 1, name: '3C' },
		],
	});
});

router.get('/:slug', (request, response) => {
	console.log(`请求 product ${request.params.slug}`);
	let id = parseInt(request.params.slug);
	if (id) response.json(product);
	else response.json(null);

});

router.get('/:slug/related/list', (request, response) => {
	console.log(`请求 product related list ${request.params.slug.toString()}`);
	response.json(products);
});

router.post('/create', (request, response) => {
	response.json({
		code: 200,
		message: 'success',
		data: 'success',
	});
});

router.post('/update', (request, response) => {
	response.json({
		code: 200,
		message: 'success',
		data: 'success',
	});
});

router.post('/remove', (request, response) => {
	response.json({
		code: 200,
		message: 'success',
		data: 'success',
	});
});


module.exports = router;

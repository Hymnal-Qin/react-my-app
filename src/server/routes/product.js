import Express from 'express';
import product from '../../assets/product-id.json';
import products from '../../assets/products.json';

const router = Express.Router();

router.get('/list', (request, response) => {
	response.json(products)
});

router.get('/:slug', (request, response) => {
	console.log(`请求 product ${request.params.slug}`)
	response.json(product)
});

router.get('/:slug/related/list', (request, response) => {
	console.log(`请求 product related list ${request.params.slug.toString()}`)
	response.json(products)
});


module.exports = router;

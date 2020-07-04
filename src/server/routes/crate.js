import Express from 'express';

import crates from '../../assets/crates.json';
import crate from '../../assets/crate-id.json';

const router = Express.Router();

router.get('/list', (request, response) => {
	const type = request.query
	console.log(type)
	response.json(crates)
})

router.get('/:slug', (request, response) => {
	const id = request.params.slug
	console.log(id)
	response.json(crate)
})

module.exports = router;

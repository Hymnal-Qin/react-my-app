import Express from 'express';
import multer from 'multer';
import path from 'path';

const router = Express.Router();

function Upload() {
	console.info('SETUP - Upload...');

	const storage = multer.diskStorage({
		destination: path.join(__dirname, '..', '..', '..', 'public', 'images', 'uploads'),
		filename: function(request, file, callback) {
			callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
		},
	});

	return multer({
		storage: storage,
	}).single('file');
}

const upload = Upload();

router.post('/upload', (request, response) => {
	upload(request, response, (error) => {
		if (!error) {
			response.json({
				code: 200,
				message: 'success',
				data: {
					file: request.file.filename,
				},
			});
		} else {
			response.json({
				code: 2001,
				message: 'filed',
				data: null,
			});
		}
	});
});

module.exports = router;

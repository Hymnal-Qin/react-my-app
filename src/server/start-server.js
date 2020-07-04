import { NODE_ENV, EXPRESS_PORT, PORT } from '../react-app-env';

export default function(server) {
	console.info('SETUP - Start server..');

	server.listen(8004, (error) => {
		if (error) {
			return console.error(error);
		} else {
			return console.info(`Server running on http://localhost:${8004} [${8004}]`);
		}
	});
}

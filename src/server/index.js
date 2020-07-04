import Express from 'express';
import { Server } from 'http';

import loadConfig from './load-configs';
import loadModules from './load-modules';
import loadRoutes from './load-routes';
import startServer from './start-server';

const app = new Express();
const server = new Server(app);

loadConfig(app)
// Load modules
loadModules(app);

// Load routes
loadRoutes(app);

// Start Server
startServer(server);

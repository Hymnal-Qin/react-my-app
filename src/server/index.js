import Express from 'express';
import { Server } from 'http';

import loadModules from './load-modules';
import loadRoutes from './load-routes';
import startServer from './start-server';

const app = new Express();
const server = new Server(app);

// Load modules
loadModules(app);

// Load routes
loadRoutes(app);

// Start Server
startServer(server);

import fastify from 'fastify'
import bodyParser from 'body-parser'
import path from 'path'
import serveStatic from 'serve-static'

import { Router } from './routes/Routes'

class App {

	constructor() {
        this.app = fastify({ logger: true });
        this.router = new Router();
        this.pathToClient = '../client/dist/';
        this.config();
        this.router.routes(this.app);
    }

    config() {
        this.app.use(bodyParser.json());
        this.app.use(serveStatic(path.join(__dirname, this.pathToClient)));
    }
    
}

export default new App().app
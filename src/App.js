import fastify from 'fastify'
import bodyParser from 'body-parser'
import path from 'path'
import serveStatic from 'serve-static'

import * as db from './config/db';
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
        db.setConnection();
        /*this.app.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
            try {
                var json = JSON.parse(body)
                done(null, json)
            } catch (err) {
                err.statusCode = 400
                done(err, undefined)
            }
        })*/
        /*this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json());*/
        this.app.use(serveStatic(path.join(__dirname, this.pathToClient)));
    }
    
}

export default new App().app
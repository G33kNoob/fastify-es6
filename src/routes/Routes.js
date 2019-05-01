import { FastifyRequest, FastifyReply } from 'fastify'
import { ServerResponse, IncomingMessage } from 'http'

import { HomeController } from '../controllers'

export class Router {

	constructor() {
		this.apiUrl = '/api/';
    	this.homeController = new HomeController();
	}

	routes(app) {
        app.get(this.apiUrl, (req, reply) => this.homeController.index(req, reply));
    }

}
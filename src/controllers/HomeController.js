import { FastifyRequest, FastifyReply } from 'fastify'

export class HomeController {

	index(req, reply) {
		reply.send({'name': 'Alex'})
	}

}
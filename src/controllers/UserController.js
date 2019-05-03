import User from '../models/User';

export class UserController {

    index(req, reply) {
		User.getAllUsers()
			.then(data => reply.send(data))
			.catch(err => console.log(err))
	}

	addUser(req, reply) {
		User.addUser(req.body)
			.then(res => reply.send(res))
			.catch(err => console.log(err))
	}
    
}
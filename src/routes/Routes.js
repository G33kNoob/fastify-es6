import { HomeController, UserController } from '../controllers'

export class Router {

	constructor() {
		this.apiUrl = '/api/';
		this.homeController = new HomeController();
		this.userController = new UserController();
	}

	routes(app) {
        app.get(this.apiUrl, (req, reply) => this.homeController.index(req, reply))
		app.get(this.apiUrl + 'users', (req, reply) => this.userController.index(req, reply))
		app.post(this.apiUrl + 'user', (req, reply) => this.userController.addUser(req, reply))
    }

}
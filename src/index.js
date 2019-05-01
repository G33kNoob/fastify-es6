import { serverPort } from './config/config.json';
import fastify from 'fastify'
import App from './App'

App.listen(serverPort, (err, address) => {
    if (err) {
        App.log.error(err)
        process.exit(1)
    }
    App.log.info(`server listening on ${serverPort}`)
})
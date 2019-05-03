import mongoose from 'mongoose'
import config from './config.json'

export function setConnection() {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
}
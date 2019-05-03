import mongoose from 'mongoose';

const Schema = mongoose.Schema;

class User {
    constructor() {
        this.UserSchema = new Schema({
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            role: { type: Number },
            position: { type: Number },
            create_at: { type: Date },
            update_at: { type: Date },
        }, { versionKey: false })

        this.user = mongoose.model('users', this.UserSchema)
    }

    getAllUsers() {
        return this.user.find()
    }

    addUser(data) {
        /*return new Promise(function(resolve, reject) {
            resolve(data)
        });*/
        const user = this.user({
            name: data.name,
            email: data.email,
            password: 'Admin12345',
            role: 3,
            position: 5,
            updated_at: '',
            created_at: new Date()
        });
        return user.save();
    }

    removeUser(_id) {
        return this.user.findById(_id).remove();
    }

}

export default new User()

/*const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number },
    position: { type: Number },
    create_at: { type: Date },
    update_at: { type: Date },
}, { versionKey: false });

const user = mongoose.model('users', UserSchema);

export function getAllUsers() {
    return user.find();
}*/

/*export function createUser(data) {
    const user = new Users ({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        updated_at: new Date(),
        created_at: new Date()
    });
    return user.save();
}*/

/*export function getUserById(id) {
    return user.findById(id);
}*/
/*
export function deleteUser(id) {
    return Users.findById(id).remove();
}*/
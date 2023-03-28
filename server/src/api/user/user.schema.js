const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 25,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        max: 30,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export const Users = model('users', userSchema)


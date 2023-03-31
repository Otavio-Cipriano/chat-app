const { Users } = require('./user.schema')

const create = async (user) => {
    const doc = await Users.create({
        username: user.username,
        email: user.email,
        password: user.password
    })

    return doc;
}

const findOne = async (username) => {
    const doc = await Users.findOne({ username: username }).select('+password')

    return doc
}

module.exports = { create, findOne }
const repository = require('../user/user.repository')

const create = async (data) => {
    try {

        const result = await repository.create(data)
        return {success: true, data: result}

    } catch (error) {
        console.log(error)
        return { success: false, error: 'Ooops something went wrong'}
    }
}

const findOne = async (username) => {
    try {
        const result = await repository.findOne(username)

        if(!result) return {success: false, data: "User doesn't exist"}

        return {success: true, data: result}
    } catch (error) {
        console.log(error)
        return { success: false, data: 'Oops'}
    }
}


module.exports = { create, findOne }
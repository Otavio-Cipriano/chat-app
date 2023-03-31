import api from "./api";

export default async function auth(second) {
    try {
        const result = await api.post('/auth/signup', {})
        console.log(result)
    } catch (error) {
        console.log(error.response.data)
    }
}
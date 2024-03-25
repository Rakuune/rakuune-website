import axios from 'axios'
const baseUrl = "/api/names"

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response.data
    } catch (error) {
        console.error('Error fetching data: ', error)
        return []
    }
}

const create = async (newObject) => {
    try {
        const response = await axios.post(baseUrl, newObject)
        return response.data
    } catch (error) {
        console.error('Error creating object: ', error)
        return null
    }
}

const update = async (id, newObject) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, newObject)
        return response.data
    } catch (error) {
        console.error('Error updating object: ', error)
        return null
    }
}

export default { getAll, create, update }
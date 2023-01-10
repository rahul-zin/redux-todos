import axios from "axios"

const todoApis = {
    getTodos: async () => {
        const data = await axios.get("https://63b3fa269f50390584a315c7.mockapi.io/Todos")
        return data["data"]
    }
}

export default todoApis
import axios from "axios"

const todoApis = {
    getTodos: async () => {
        const data = await axios.get("https://63b3fa269f50390584a315c7.mockapi.io/Todos")
        return data["data"]
    },
    createTodo: async (todo) => {
        const data = await axios.post("https://63b3fa269f50390584a315c7.mockapi.io/Todos", todo)
        return data["data"]
    }
}

export default todoApis
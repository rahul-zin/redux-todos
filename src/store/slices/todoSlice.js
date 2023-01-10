import { createSlice } from '@reduxjs/toolkit';
import todoApis from '../../api/todoAPI';

const initialState = {
    allTodos: [],
    todos: [],
    loading: true,
    currPage: 0
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        setAllTodos: (state, action) => {
            state.allTodos = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
});

export const { addTodo, setTodos, setAllTodos, setLoading } = todoSlice.actions;
export const totalPagesCount = (state) => {
    const totalTodosCount = state.todo.allTodos.length
    return Math.ceil(totalTodosCount / 4)
};
export const setCurrPage = (pageIdx) => (dispatch, getState) => {
    const startIdx = (pageIdx - 1) * 4
    const endIdx = startIdx + 4
    dispatch(setTodos(getState().todo.allTodos.slice(startIdx, endIdx)))
}

export const fetchTodos = () => (dispatch, getState) => {
    dispatch(setLoading(true))
    todoApis.getTodos().then(resp => {
        dispatch(setAllTodos(resp))
        dispatch(setTodos(resp.slice(0, 4)))
        dispatch(setLoading(false))
    }).catch(err => dispatch(setLoading(false)))
}

export default todoSlice.reducer;
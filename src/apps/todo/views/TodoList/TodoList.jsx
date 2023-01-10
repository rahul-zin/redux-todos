import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import TodoCard from "../TodoCard/TodoCard";
import { fetchTodos } from "../../../../store/slices/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
    const loading = useSelector((state) => state.todo.loading);
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    if (loading) {
        return (
            <section className="todo_list">
                <Skeleton variant="rectangular" fullWidth height={160} />
                <Skeleton variant="rectangular" fullWidth height={160} />
                <Skeleton variant="rectangular" fullWidth height={160} />
            </section>
        );
    }
    return (
        <section className="todo_list">
            {todos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </section>
    );
};

export default TodoList;

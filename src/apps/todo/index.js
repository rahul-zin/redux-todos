import { Container} from "@mui/material";
import React from "react";
import "./index.css";
import TodoList from "./components/TodoList/TodoList";
import TodoFooter from "./components/TodoFooter/TodoFooter";

export default function TodoApp() {
    return (
        <Container maxWidth="md" className="todo_container">
            <main>
                <TodoList />
            </main>
            <TodoFooter />
        </Container>
    );
}
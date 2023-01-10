import { Container} from "@mui/material";
import React from "react";
import "./todo_layout.css";
import TodoList from "../views/TodoList/TodoList";
import TodoFooter from "../views/TodoFooter/TodoFooter";

export default function TodoLayout() {
    return (
        <Container maxWidth="md" className="todo_container">
            <main>
                <TodoList />
            </main>
            <TodoFooter />
        </Container>
    );
}

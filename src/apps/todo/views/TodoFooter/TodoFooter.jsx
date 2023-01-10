import { Fab, Pagination } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTodoDialog from "../AddTodoDialog/AddTodoDialog"
import {
    setCurrPage,
    totalPagesCount,
} from "../../../../store/slices/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const TodoFooter = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const pagesCount = useSelector(totalPagesCount);
    const dispatch = useDispatch();

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handlePageChange = (_, pageIdx) => {
        dispatch(setCurrPage(pageIdx));
    };

    return (
        <footer>
            <Pagination
                maxWidth="sm"
                count={pagesCount}
                color="primary"
                size="large"
                onChange={handlePageChange}
            />
            <Fab
                color="primary"
                aria-label="add"
                variant="extended"
                onClick={handleDialogOpen}
            >
                <AddIcon /> Add Todo
            </Fab>
            <AddTodoDialog
                open={isDialogOpen}
                handleClose={handleDialogClose}
            />
        </footer>
    );
};


export default TodoFooter
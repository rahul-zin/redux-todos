import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
export default function AddTodoDialog({ open, handleClose }) {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let's get you started on tasks
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="normal"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => {}}>Add Todo</Button>
            </DialogActions>
        </Dialog>
    );
}

import { Delete, Done } from "@mui/icons-material";
import {
    Button,
    Card,
    CardActions,
    CardHeader,
    IconButton,
} from "@mui/material";
import React from "react";

export default function TodoCard({todo}) {
    return (
        <div>
            <Card elevation={0}>
                <CardHeader
                    action={
                        <IconButton aria-label="delete">
                            <Delete />
                        </IconButton>
                    }
                    title={todo.title}
                    subheader="September 14, 2016"
                ></CardHeader>
                <CardActions>
                    <Button startIcon={<Done />}>
                        Mark as complete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

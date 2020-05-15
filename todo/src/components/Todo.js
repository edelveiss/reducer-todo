import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1.5),
      width: theme.spacing(80),
      height: theme.spacing(8),
    },
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const handleClick = (e) => {
    props.toggleTodoCompleted(props.todoItem.id);
  };
  return (
    <div className={classes.root}>
      <Paper
        elevation={3}
        onClick={handleClick}
        className={`todo${props.todoItem.completed ? " completed" : ""}`}
      >
        {props.todoItem.item}
      </Paper>
    </div>
  );
};
export default Todo;

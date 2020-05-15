import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1.5),
      width: theme.spacing(80),
      height: theme.spacing(5),
      color: "rgb(40, 64, 189)",
      fontWeight: "bolder",
      //background: "rgb(247, 206, 220)",
    },
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const [time, setTime] = useState("");
  const handleClick = (e) => {
    props.toggleTodoCompleted(props.todoItem.id);
  };
  useEffect(() => {
    setTime(moment(new Date()).format("YYYY-MM-DD hh:mm:ss"));
  }, []);
  return (
    <div className={classes.root}>
      <Paper
        elevation={3}
        onClick={handleClick}
        className={`todo${props.todoItem.completed ? " completed" : ""}`}
      >
        <div className="time">
          <div>{props.todoItem.item}</div>
          <div>{props.todoItem.timeTodo}</div>
        </div>
      </Paper>
    </div>
  );
};
export default Todo;
//{moment().format("LTS")}

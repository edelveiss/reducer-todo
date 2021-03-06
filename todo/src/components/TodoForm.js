import React, { useState, useReducer } from "react";
//import moment from "moment";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoForm = (props) => {
  const [itemName, setItemName] = useState("");
  //var now = moment().format("LTS");
  const classes = useStyles();
  const handleChanges = (e) => {
    setItemName(e.target.value);
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    props.addTodo(itemName);
    setItemName("");
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img src="https://img.icons8.com/nolan/64/todo-list.png" />
              <Typography
                className={classes.title}
                variant="h6"
                noWrap
                style={{ fontSize: "2rem" }}
              >
                To-Dos
              </Typography>
            </IconButton>
            <form onSubmit={handleAddItem} style={{ display: "flex" }}>
              <div className={classes.search}>
                <div className={classes.searchIcon}></div>
                <InputBase
                  value={itemName}
                  onChange={handleChanges}
                  placeholder="Enter Todo"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput1,
                  }}
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ marginLeft: "0.6rem", marginRight: " 3rem" }}
              >
                Add Todo
              </Button>
            </form>
            <Button
              onClick={props.clearCompleted}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Clear Completed
            </Button>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={props.handleFormChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};
export default TodoForm;

//{moment(new Date(props.createdAt)).format("YYYY-MM-DD hh:mm:ss")}
//{moment().format("LTS")}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "24ch",
      },
    },
  },

  inputInput1: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "32ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

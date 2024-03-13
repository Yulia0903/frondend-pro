import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const CustomAppBar = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleThemeChange = () => {
    dispatch(toggleTheme(!isDarkMode));
    setChecked(!checked);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Todo App</Typography>
        <Switch checked={checked} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

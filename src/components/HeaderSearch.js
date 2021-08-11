// This component contains the idea of converting the string to a spaceless percentile restfull api

import React from "react";

import {
  makeStyles,
  InputBase,
  MenuItem,
  Menu,
  IconButton,
  Container,
  Grid,
} from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import axios from "axios";
import Div from "./Div";
import { useHistory, Link } from "react-router-dom";

///
const useStyles = makeStyles((theme) => ({
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
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const options = ["anime", "character"];

const ITEM_HEIGHT = 48;
//////////////////////////////////////////
/// Function for input taking////////////////
function InputTake({ type }) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("   ");
  const [item, setItem] = React.useState("");
  const [itemChar, setItemChar] = React.useState("");
  // calling the api with entered value
  const defaultValue = "naru";
  const api = `https://api.jikan.moe/v3/search/anime?page=1&q=${
    value.length > 3 ? value.replace(/ /g, "%20") : defaultValue
  }`;
  const apiCharacter = `https://api.jikan.moe/v3/search/character?page=1&q=${
    value.length > 3 ? value.replace(/ /g, "%20") : defaultValue
  }`;
  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(api);
      setItem(data.results);
      console.log(data.results);
    };
    getData();
  }, [value]);
  /// calling for div
  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(apiCharacter);
      setItemChar(data.results);
      console.log(data.results);
    };
    getData();
  }, [value]);

  return type === "character" ? (
    <Autocomplete
      id="combo-box-demo"
      options={itemChar}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => {
        const { InputLabelProps, InputProps, ...rest } = params;
        return (
          <InputBase
            {...params.InputProps}
            {...rest}
            placeholder={`${type}...`}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                // setSearchValue(value);
                // redirect to search page
                history.push({
                  pathname: "/search",
                  // search: "?query=abc",
                  state: { value: value, type: type },
                });
              }
            }}
          />
        );
      }}
    />
  ) : (
    <Autocomplete
      id="combo-box-demo"
      options={item}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => {
        const { InputLabelProps, InputProps, ...rest } = params;
        return (
          <InputBase
            {...params.InputProps}
            {...rest}
            placeholder={`${type}...`}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                // setSearchValue(value);
                // redirect to search page
                history.push({
                  pathname: "/search",
                  // search: "?query=abc",
                  state: { value: value },
                });
              }
            }}
          />
        );
      }}
    />
  );
}
////////////////////////////////
// Function for Selelcting icon near header
function HeaderSearch({ setType, type }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(type);
  };
  const handleMenuTap = (option) => {
    setType(option);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <ArrowDropDownCircleIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "anime"}
            onClick={() => handleMenuTap(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export { HeaderSearch, InputTake };

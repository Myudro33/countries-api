import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Search = ({ theme, region, setregion, cityName, setcityName }) => {
  const handleChange = (e) => {
    setregion(e.target.value);
  };
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "30px 0px",
      }}
    >
      <TextField
        value={cityName}
        onChange={(e) => setcityName(e.target.value)}
        sx={{
          width:{lg:'400px',xs:'200px',sm:'300px'}, 
          backgroundColor: `${
            theme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
          }`,
        }}
        id="input-with-icon-textfield"
        label="Search For A Country"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <FormControl sx={{ width:{lg:'180px',xs:'100px',sm:'150px'} }}>
        <InputLabel
          sx={{
            backgroundColor: `${theme ? "hsl(207, 26%, 17%)" : "whitesmoke"}`,
          }}
          id="demo-simple-select-label"
        >
          Filter By Region
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"America"}>America</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Search;

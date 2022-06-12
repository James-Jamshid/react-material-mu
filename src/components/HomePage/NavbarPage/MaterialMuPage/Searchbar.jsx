import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search Language" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "Css", year: 1994 },
  { label: "Javascript", year: 1972 },
  { label: "Html", year: 1974 },
  { label: "Reactjs", year: 2008 },
  { label: "Nodejs", year: 1957 },
  { label: "Java", year: 1993 },
  { label: "C++", year: 1994 },
  {
    label: "Python",
    year: 2003,
  },
  { label: "Swift", year: 1966 },
  { label: "Typescript", year: 1999 },
  {
    label: "PHP",
    year: 2001,
  },
];

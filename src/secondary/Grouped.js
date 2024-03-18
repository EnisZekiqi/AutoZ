import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 150,marginLeft:10}}
      renderInput={(params) => <TextField {...params} 
      InputProps={{
        ...params.InputProps,
        style: { color: '#040316' }, // Change text color
        className: 'custom-input-class', // Add custom class for border styling
        // Other InputProps settings can be added here
      }} 
       label="Brand" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Mercedes-Benz', year: 1994 },
  { title: 'BMW', year: 1972 },
  { title: 'Audi', year: 1974 },
  { title: 'Volkswagen', year: 2008 },
  { title: 'Porsche', year: 1957 },
  { title: "Ford", year: 1993 },
  { title: 'Honda', year: 1994 },
  {
    title: 'Ferrari',
    year: 2003,
  },
  { title: 'Toyota', year: 1966 },
  { title: 'Renault', year: 1999 },
  {
    title: 'Tesla',
    year: 2001,
  },
  {
    title: 'Nissan',
    year: 1980,
  },
];
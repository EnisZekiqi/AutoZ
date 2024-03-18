import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Fuel() {
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
      sx={{ width: 150,marginLeft:0}}
      renderInput={(params) => <TextField {...params} 
      InputProps={{
        ...params.InputProps,
        style: { color: '#040316' }, // Change text color
        className: 'custom-input-class', // Add custom class for border styling
        // Other InputProps settings can be added here
      }} 
       label="Fuel" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Petrol', year: 1994 },
  { title: 'Diesel', year: 1972 },
  { title: 'Electric', year: 1974 },
];
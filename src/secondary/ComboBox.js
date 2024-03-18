import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 150 }}
      renderInput={(params) => <TextField {...params} 
      InputProps={{
        ...params.InputProps,
        style: { color: '#040316' }, // Change text color
        className: 'custom-input-class', // Add custom class for border styling
        // Other InputProps settings can be added here
      }} 
      label="Budget" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: '7000$', year: 1994 },
  { label: '8000$', year: 1972 },
  { label: '9000$', year: 1974 },
  { label: '10000$', year: 2008 },
  { label: '11000$', year: 1957 },
  { label: "12000$", year: 1993 },
  { label: '13000$', year: 1994 },
  {
    label: '14000$',
    year: 2003,
  },
  { label: '15000$', year: 1966 },
  { label: '16000$', year: 1999 },
  {
    label: '17000$',
    year: 2001,
  },
  {
    label: '18000$',
    year: 1980,
  },
  { label: '19000$', year: 1994 },
  { label: '20000$', year: 2010 },
  {
    label: '21000$',
    year: 2002,
  },
  { label: "22000$", year: 1975 },
  { label: '23000$', year: 1990 },
  { label: '24000$', year: 1999 },
  { label: '25000$', year: 1954 },
  {
    label: '27000$',
    year: 1977,
  },
  { label: '28000$', year: 2002 },
  { label: '29000$', year: 1995 },
  { label: '30000$', year: 1991 },
  { label: "31000$", year: 1946 },
  { label: '32000$', year: 1997 },
  { label: '33000$', year: 1995 },
  { label: '34000$', year: 1994 },
  { label: '35000$', year: 2001 },
  { label: '36000$', year: 1998 },
  { label: '37000$', year: 1968 },
  { label: '38000$', year: 1998 },
  { label: '39000$', year: 2014 },
  { label: '40000$', year: 1942 },
  { label: '41000$', year: 1931 },
  { label: '42000$', year: 1960 },
  { label: '43000$', year: 1999 },
  { label: '44000$', year: 2011 },
  { label: '45000$', year: 1936 },
  { label: '46000$', year: 1981 },
  { label: '47000$', year: 1954 },
  { label: '48000$', year: 2002 },
  { label: '49000$', year: 2006 },
  { label: '50000$', year: 1991 },
  { label: '51000$', year: 1985 },
  { label: '52000$', year: 2014 },
  { label: '53000$', year: 2000 },
  { label: '54000$', year: 2000 },
  { label: '55000$', year: 2006 },
  { label: '56000$', year: 1994 },
];
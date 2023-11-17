import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectProduct( { price, setPrice } ) {

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
//   console.log(price);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={price}
          onChange={handleChange}
          autoWidth
          label="Price"
        >
          <MenuItem value="">
            <p>All</p>
          </MenuItem>
          <MenuItem value={10}>10 $</MenuItem>
          <MenuItem value={50}>50 $</MenuItem>
          <MenuItem value={110}>110 $</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
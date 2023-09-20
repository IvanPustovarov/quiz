import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectOptions } from './mockSelectData';

type Props = {
  options?: SelectOptions[];
};

export default function SharedSelect({ options }: Props) {
  const [option, setOption] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select labelId="demo-select-small-label" id="demo-select-small" value={option} label="Option" onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options?.map((item, index) => (
          <MenuItem value={item.id} key={index}>
            {item.name ? item.name : item.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SelectOptions } from './mockSelectData';

type Props = {
  options?: SelectOptions[];
  label: string;
  handleSelectOption: (event: SelectChangeEvent) => void;
};

export default function SharedSelect({ options, label, handleSelectOption }: Props) {
  const [option, setOption] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
    handleSelectOption(event);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select labelId="demo-select-small-label" id="demo-select-small" value={option} label="Option" onChange={handleChange}>
        <MenuItem value="">
          <em>Не выбрано</em>
        </MenuItem>
        {options?.map((item, index) => (
          <MenuItem value={item.name} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

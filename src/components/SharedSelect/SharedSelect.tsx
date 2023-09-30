import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectUnionOption } from './mockSelectData';
import { Option } from '../HomeScreen/HomeScreen';

type Props = {
  options?: Option[];
  label: string;
  handleSelectOption: (option: Option) => void;
};

const isSelectWithRus = (value: Option): value is SelectUnionOption => 'rusName' in value;

export default function SharedSelect({ options, label, handleSelectOption }: Props) {
  const [option, setOption] = useState<Option | null>(null);

  const handleChange = (option: Option) => {
    setOption(option);
    handleSelectOption(option);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select labelId="demo-select-small-label" id="demo-select-small" value={option?.name || ''} label={label}>
        {options?.map((option, index) => (
          <MenuItem value={option.name} onClick={() => handleChange(option)} key={index}>
            {isSelectWithRus(option) ? option.rusName : option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

import React, { useState } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
//import styled from 'styled-components';
const Books= ['Do or Die', 'regretting you', 'Stolen', 'Never say Die', 'I know a secret','Ugly Love'];
const SearchAutocomplete = () => {
 //const [name, setName] = useState('');
 const [selectedValue, setSelectedValue] = useState(null);
//  const handleSubmit = (event) => {
//  event.preventDefault();
//  };
 return (

 <Autocomplete
 style= {{ width: '600px', padding: '15px', fontSize: '18px', borderRadius: '10px' }}
 value={selectedValue}
 onChange={(_, newValue) => setSelectedValue(newValue)}
 options={Books}
 renderInput={(params) => (
 <TextField {...params} data-testid={`option-${selectedValue}`} label="Search" 
variant="outlined" />
 )}
 data-testid="autocomplete"
 />
 )}
export default SearchAutocomplete;
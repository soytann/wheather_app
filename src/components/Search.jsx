import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Search = () => {
  


  return (
    <>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="都市名"
          variant="standard"
          value={region}
          onChange={(e)=> setRegion(e.target.value)}
          InputProps={{ 
            endAdornment: (
              <InputAdornment position='end' >
                <SearchIcon/>
              </InputAdornment>
            )
           }}/>
      </Box>


    </>
  );
}

export default Search;
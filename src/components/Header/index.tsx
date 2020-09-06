import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { FormControl, Select, MenuItem, Typography } from '@material-ui/core';
function Header(props:any) {
    const [country,setCountry] = useState('worldwide');
    const onCountryChange = (event:any)=>{
        let country = event.target.value;
        setCountry(country)
        props.onCountryChange(country)
    }
    return (
        <Box display='flex' justifyContent='space-between' mb={2}>
            <Box>
                <Typography variant='h4'>COVID Tracker</Typography>
            </Box>
            <Box>
                <FormControl>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    onChange={onCountryChange}
                    >
                        <MenuItem value='worldwide'>Worldwide</MenuItem>
                        {
                            props.countries!==undefined && props.countries.map((country:any,index:number)=>(
                            <MenuItem value={country.code}>{country.name}</MenuItem>
                            ))
                        }    
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Header

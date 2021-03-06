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
                    <Select style={{backgroundColor:'white', padding:'4px', border:'1px solid grey'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    onChange={onCountryChange}
                    >
                        <MenuItem value='worldwide'>Worldwide</MenuItem>
                        {
                            props.countries!==undefined && props.countries.map((country:any,index:number)=>(
                            <MenuItem key={index} value={country.countryInfo.iso2}>{country.country}</MenuItem>
                            ))
                        }    
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Header

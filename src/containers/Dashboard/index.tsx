import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Box } from '@material-ui/core'
import CountryInfo from '../../components/CountryInfo'
import {Country} from './Country'
import CountriesTable from '../../components/CountriesTable'
import {sortData} from '../../utils'
function Dashboard() {
    const [countryInfo,setCountryInfo]:any = useState();
    const [countries,setCountries] = useState([]);
    
    useEffect(() => {
        const getCountries = async ()=>{
            fetch('https://disease.sh/v3/covid-19/countries')
            .then(response=>response.json())
            .then(data=>{
                const countries = data.map((countryData:any)=>{
                    return new Country(countryData)
                })
                const sortedData:any = sortData(countries)
                setCountries(sortedData)
            })
        }
        getCountries()
    }, [])
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response=>response.json())
        .then(data=>{
            setCountryInfo(data)
        })
    }, [])
    const onCountryChange = async (countryCode:any)=>{
        const url = countryCode==='worldwide'? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url).then(response=>response.json())
        .then(data=>{
            let countryInfo = new Country(data)
            setCountryInfo(countryInfo)
        })
    }
    return (
        <Box p={1.5} display='flex' className='app' justifyContent='space-between'>
            <Box flex={.8}>
            <Header onCountryChange={onCountryChange} countries={countries}/>
            {
                countryInfo &&
                <Box display='flex' justifyContent='space-between'>
                    <CountryInfo title='Coronavirus Cases' todayData={countryInfo.todayCases} totalData={countryInfo.cases}/>
                    <CountryInfo title='Recovered' todayData={countryInfo.todayRecovered} totalData={countryInfo.recovered}/>
                    <CountryInfo title='Deaths' todayData={countryInfo.todayDeaths} totalData={countryInfo.deaths}/>
                </Box>
            }
            </Box>
            <Box>
            <CountriesTable countries={countries}/>
            </Box>
        </Box>
    )
}

export default Dashboard

import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Box } from '@material-ui/core'
import CountryInfo from '../../components/CountryInfo'
import CountriesTable from '../../components/CountriesTable'
import {sortData} from '../../utils'
import LineGraph from '../../components/LineGraph'
import Map from '../../components/Map'
import { Card, CardContent, Typography } from '@material-ui/core';

function Dashboard() {
    const [countryInfo,setCountryInfo]:any = useState();
    const [countries,setCountries] = useState([]);
    const [mapPosition,setMapPosition]:any = useState([29.5321,75.031]);
    const [mapZoom,setMapZoom] = useState(2);
    
    useEffect(() => {
        const getCountries = async ()=>{
            fetch('https://disease.sh/v3/covid-19/countries')
            .then(response=>response.json())
            .then(data=>{
                const countries = data.map((countryData:any)=>{
                    return countryData
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
            setCountryInfo(data);
            if(countryCode==='worldwide'){
                setMapPosition([50,50])
                setMapZoom(1)
            }
            else{
                setMapZoom(4)
                setMapPosition([data.countryInfo.lat,data.countryInfo.long])
            }
        })
    }
    return (
        <Box p={1.5} display='flex' className='app' justifyContent='space-between'>
            <Box flex={.8} display='flex' flexDirection='column'>
            <Header onCountryChange={onCountryChange} countries={countries}/>
            {
                countryInfo &&
                <Box display='flex' justifyContent='space-between'>
                    <CountryInfo type='cases' title='Confirmed Cases' todayData={countryInfo.todayCases} totalData={countryInfo.cases}/>
                    <CountryInfo type='recovered' title='Recovered' todayData={countryInfo.todayRecovered} totalData={countryInfo.recovered}/>
                    <CountryInfo type='deaths' title='Deaths' todayData={countryInfo.todayDeaths} totalData={countryInfo.deaths}/>
                </Box>
            }
            <Card style={{marginTop:'16px'}}>
                <CardContent style={{paddingBottom:'16px'}}>
                    <Map mapPosition={mapPosition} zoom={mapZoom} countries={countries}/>
                </CardContent>
            </Card>
            </Box>
            <Box>
            <Card>
                <CardContent>
                <CountriesTable countries={countries}/>
                <LineGraph/>
                </CardContent>
            </Card>
            </Box>
        </Box>
    )
}

export default Dashboard

import React, { useState } from 'react'
import { Box, Typography, useTheme } from '@material-ui/core'
import { Map, TileLayer, Marker, Popup, Circle, Tooltip } from 'react-leaflet'
import numeral from "numeral";

function MapContainer(props:any) {
    const [state,setState] = useState({
        lat: 29.5321,
        lng: 75.0318,
        zoom: 13,
      })
    const position:any = [state.lat, state.lng]
    const theme= useTheme()
    return (
        <Box id='map' flex='auto' my={2}>
            <Map center={props.mapPosition} zoom={props.zoom} style={{height:'100%'}}>
                <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.mapPosition}></Marker>
                {
                    props.countries.map((country:any,index:number)=>(
                        <Circle center={[country.countryInfo.lat,country.countryInfo.long]} radius={Math.sqrt(country.cases)*700} 
                                color={theme.palette.secondary.main} fillColor = '#CC1034' fillOpacity={0.2} >
                            <Tooltip>
                                <Box>
                                    <Box>
                                    <strong>{country.country}</strong>
                                    <img style={{width:'20px',height:'12px',marginLeft:'4px'}} 
                                    src={country.countryInfo.flag}/>
                                    </Box>
                                    <Box>
                                    <Typography color='primary' variant='caption'>Confirmed: </Typography>{numeral(country.cases).format("0,0")}
                                    </Box>
                                    <Box>
                                    <Typography style={{color:'green'}} variant='caption'>Recovered: </Typography>{numeral(country.recovered).format("0,0")}
                                    </Box>
                                    <Box>
                                    <Typography color='error' variant='caption'>Deaths: </Typography>{numeral(country.deaths).format("0,0")}
                                    </Box>
                                </Box>
                                </Tooltip>
                        </Circle>
                    ))
                }
            </Map>
        </Box>
    )
}

export default MapContainer

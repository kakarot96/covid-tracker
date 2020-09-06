import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
interface CountryInfoProps{
    title:string,
    todayData:number,
    totalData:number
}
function CountryInfo(props:CountryInfoProps) {
    return (
        <Card>
            <CardContent>
                <Typography variant='h6'>{props.title}</Typography>
                <Typography variant='h6'>+{props.todayData}</Typography>
                <Typography variant='body1'>{props.totalData}</Typography>     
            </CardContent>
        </Card>
    )
}

export default CountryInfo

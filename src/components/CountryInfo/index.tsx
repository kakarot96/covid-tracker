import React from 'react'
import { Typography, Card, CardContent, useTheme } from '@material-ui/core'
interface CountryInfoProps{
    title:string,
    todayData:number,
    totalData:number,
    type:string
}
function CountryInfo(props:CountryInfoProps) {
    const theme = useTheme()
    return (
        <Card style={{flex:0.3}}>
            <CardContent>
                <Typography style={{color:props.type==='cases'?theme.palette.primary.main:
                (props.type==='recovered'?theme.palette.success.main:theme.palette.error.main)}} variant='h6'>{props.title}</Typography>
                <Typography variant='h6'>+{props.todayData}</Typography>
                <Typography variant='body1'><strong>Total:</strong> {props.totalData}</Typography>     
            </CardContent>
        </Card>
    )
}

export default CountryInfo

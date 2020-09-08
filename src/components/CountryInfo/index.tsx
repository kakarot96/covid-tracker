import React from 'react'
import { Typography, Card, CardContent, useTheme } from '@material-ui/core'
import numeral from "numeral";
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
                <Typography variant='body1'>{props.title}</Typography>
                <Typography style={{color:props.type==='cases'?theme.palette.primary.main:
                (props.type==='recovered'?theme.palette.success.main:theme.palette.error.main),fontSize:'1.8rem'}} variant='h6'>+{numeral(props.todayData).format("0a")}</Typography>
                <Typography variant='body1'><strong>Total:</strong> {numeral(props.totalData).format("0a")}</Typography>     
            </CardContent>
        </Card>
    )
}

export default CountryInfo

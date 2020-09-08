import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2';
import numeral from "numeral";
import { Box } from '@material-ui/core';

const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: true,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem:any, data:any) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            callback: function (value:any, index:any, values:any) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };
function LineGraph(props:any) {
    const [chartData,setChartData]:any = useState();
    const dataType = props.dataType?props.dataType:'cases';
    const getChartData = (data:any,dataType='cases')=>{
        let lastDataPoint;
        const chartData = [];
        for(let dataPoint in data[dataType]){
            if(lastDataPoint){
                let newDataPoint = {
                    x:dataPoint,
                    y:data[dataType][dataPoint]-lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[dataType][dataPoint];
        }
        return chartData
    }
    useEffect(() => {
        const getData = async ()=>{
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120').then(res=>res.json())
            .then(data=>{
                let convertedData = getChartData(data);
                setChartData(convertedData)
            })
        }
        getData();
    }, [])
    return (
        <Box my={2}>
            {chartData && <Line 
            data={{
                datasets:[
                    {
                        backgroundColor: "rgba(204, 16, 52, 0.5)",
                        borderColor: "#DD1034",
                        data:chartData
                    }
                ]
            }}
            options={options} 
            />}
        </Box>
    )
}

export default LineGraph
import React, { useState, useEffect } from 'react'
import { Slider } from '@material-ui/core';
import { LineChart, Line } from 'recharts';
export default function Slid({ value }) {




    // const [state, setstate] = useState()

    // useEffect(() => {
    //     setstate(value.point)
    // }, [value.point])


    return (
        <div >
            {/* <Slider
                orientation="vertical"
                defaultValue={defaultValue}
                aria-labelledby="vertical-slider"
                disabled={true}
                aria-label='salam'
                valueLabelDisplay="on"
            /> */}

            <LineChart 
            width={400} 
            height={400} 
            // data={data}
            >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    )
}

import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { Slider } from '@material-ui/core';

import './RightComp.scss'

export default function RightComp() {
    const context = useContext(VoteContext)
    console.log(context);
    return (
        <div className='rightside'>
            <section className='rightside__slider'>
                <Slider
                    orientation="vertical"
                    defaultValue={3}
                    aria-labelledby="vertical-slider"
                    disabled={true}
                    aria-label='salam'
                    valueLabelDisplay="on"

                />
            </section>
        </div>
    )
}

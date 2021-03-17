import './MiddleComp.scss'
import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { FormControlLabel, Radio, RadioGroup, FormLabel, FormControl } from '@material-ui/core';

export default function MiddleComp() {

    const context = useContext(VoteContext)
    const [radio, setRadio] = useState('')

    console.log(context);
    const handleChange = () => {
        console.log(radio);
    }
    return (
        <div className='middleside'>
            <h2>{context.title}</h2>

            <FormControl component="fieldset">
                <RadioGroup name="gender1" value={radio} onChange={(e) => setRadio(e.target.value)}>
                    {
                        context.voteItems.map((item, index) => {
                            return (
                                <FormControlLabel value={item} control={<Radio />} label={item} />

                            )
                        })
                    }

                </RadioGroup>
            </FormControl>


        </div>
    )
}

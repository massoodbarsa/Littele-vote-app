import React, { useContext, useState } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { FormControlLabel, Radio, RadioGroup, FormControl, Button } from '@material-ui/core';

export default function MiddleComp() {

    const context = useContext(VoteContext)
    const [radio, setRadio] = useState('')

    const handleVote = () => {

        if (radio.length === 0) {
            return
        }
        context.updateVotes(radio)
    }

    console.log(context.voteItems);

    return (
        <div className='middleside'>
            <h2 className='middleside__title'>{context.title}</h2>

            <section className='middleside__vote-container'>
                <div className='middleside__vote-container__radios'>
                    <FormControl component="fieldset">
                        <RadioGroup name="gender1" value={radio} onChange={(e) => setRadio(e.target.value)}>
                            {
                                context.voteItems.map((i, index) => {
                                    return (
                                        <FormControlLabel value={i.item} control={<Radio />} label={i.item} key={index} />
                                    )
                                })
                            }

                        </RadioGroup>
                    </FormControl>
                </div>

                {
                    context.voteItems.length > 1 &&
                    <Button
                        color='primary'
                        variant="outlined"
                        className='middleside__vote-container__btn'
                        onClick={handleVote}
                    >
                        Vote
                     </Button>
                }
            </section>
        </div>
    )
}

import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import Slide from './Slide'


export default function RightComp() {

    const context = useContext(VoteContext)

    useEffect(() => {
        setstate(context.votes)
    }, [context.votes])

    const [state, setstate] = useState(context.votes)

    return (
        <div className='rightside'>
            <section >
                {
                    state.map((item, index) => {
                        return (
                            <div key={index} className='rightside__slider'>
                                <Slide value={item} />
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

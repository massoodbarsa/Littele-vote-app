import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import './RightComp.scss'

export default function RightComp() {
    const context = useContext(VoteContext)
console.log(context);
    return (
        <div className='rightside'>
            right
        </div>
    )
}

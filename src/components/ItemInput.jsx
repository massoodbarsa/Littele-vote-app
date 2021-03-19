import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ItemInput({ item }) {
    const context = useContext(VoteContext)

    const handleEditInput = (value, id) => {
        context.updateInputs(value, id)
    }

    const handleDelete = (id) => {
        const newVote = context.voteItems.filter(i => i.id !== id)
        context.deleteItems(newVote)
    }

    return (
        <div className='leftside__questions__item'>
            <TextField
                value={item.item}
                disabled={context.disableInputs}
                variant='outlined'
                size='small'
                onChange={(e) => handleEditInput(e.target.value, item.id)}
                inputProps={{ maxLength: 30 }}
            />
            <section className='icon'>
                <FontAwesomeIcon icon={faTrash} size='1x' onClick={() => handleDelete(item.id)} />
            </section>
        </div>
    )
}

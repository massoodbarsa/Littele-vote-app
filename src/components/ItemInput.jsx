import React, { useContext } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ItemInput({ item }) {
    const context = useContext(VoteContext)

    const handleDelete = (item) => {
        const newVote = context.voteItems.filter(i => i !== item)
        context.deleteItems(newVote)
    }
    return (
        <div className='leftside__questions__item'>
            <TextField
                value={item}
                disabled={true}
                variant='outlined'
                size='small'
                inputProps={{ maxLength: 30 }}
            />
            <section className='icon'>
                <FontAwesomeIcon icon={faTrash} size='1x' onClick={() => handleDelete(item)} />
            </section>
        </div>
    )
}

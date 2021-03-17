import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { Button, TextField } from '@material-ui/core';
import './LeftComp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFolderPlus } from '@fortawesome/free-solid-svg-icons'

export default function LeftComp() {
    const context = useContext(VoteContext)

    const [vote, setVote] = useState(context.voteItems)
    const [title, setTitle] = useState('')
    const [newItem, setNewItem] = useState(null)

    // console.log(vote);

    useEffect(() => {
        context.addTitle(title)
    }, [title])

    const handleDelete = (item) => {
        const newVote = context.voteItems.filter(i => i !== item)
        // setVote(newVote)
        context.updateItems(newVote)
    }

    const handleAddItem = () => {
        console.log(newItem);
        context.addItem(newItem)
        setNewItem('')
    }

    return (
        <div className='leftside'>
            <TextField
                margin='normal'
                label="Subject"
                size='medium'
                variant='outlined'
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className="leftside__questions">
                {
                    context.voteItems && context.voteItems.map((item, index) => {
                        return (
                            <div className="leftside__questions__item" key={index}>

                                <TextField
                                    value={item}
                                    disabled={true}
                                    variant='outlined'
                                    size='small'
                                />
                                <section className='del-icon'>
                                    <FontAwesomeIcon icon={faTrash} size='1x' onClick={() => handleDelete(item)} />
                                </section>
                            </div>
                        )
                    })
                }

                <div className="leftside__questions__item" >

                    <TextField
                        value={newItem}
                        variant='outlined'
                        margin='normal'
                        size='small'
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <section className='del-icon'>
                        <FontAwesomeIcon icon={faFolderPlus} size='2x' onClick={handleAddItem} />
                    </section>
                </div>
            </div>

        </div>
    )
}

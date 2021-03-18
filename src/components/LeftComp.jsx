import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFolderPlus } from '@fortawesome/free-solid-svg-icons'

export default function LeftComp() {
    const context = useContext(VoteContext)

    const [vote, setVote] = useState(context.voteItems)
    const [title, setTitle] = useState('')
    const [newItem, setNewItem] = useState('')


    useEffect(() => {
        context.addTitle(title)
    }, [title])

    const handleDelete = (item) => {
        const newVote = context.voteItems.filter(i => i !== item)
        // setVote(newVote)
        context.updateItems(newVote)
    }

    const handleAddItem = () => {
        context.addItem(newItem)
        setNewItem('')
    }

    const handlePressEnter = (e) => {
        if (e.keyCode === 13) {
            handleAddItem()
        }
    }

    const handleReset = () => {
        setTitle('')
        context.resetState()
    }

    return (
        <div className='leftside'>
            <TextField
                value={title}
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
                                <section className='icon'>
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
                        onKeyDown={(e) => handlePressEnter(e)}
                    />
                    <section className='icon'>
                        <FontAwesomeIcon icon={faFolderPlus} size='2x' onClick={handleAddItem} />
                    </section>
                </div>
            </div>

            <div className='leftside__buttom'>
                <p>
                    <span className='usedAnswer'>{context.voteItems.length} </span> / <span className='limit'>10 </span>
                    Possible answers
                </p>
                <Button
                    color='secondary'
                    variant="outlined"
                    onClick={handleReset}
                >
                    Reset
                </Button>

            </div>

        </div>
    )
}

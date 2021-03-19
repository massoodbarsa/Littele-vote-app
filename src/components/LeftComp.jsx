import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import Uuid from 'react-uuid';
import { Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import Snack from './Snack';
import ItemInput from './ItemInput';


export default function LeftComp() {

    const context = useContext(VoteContext)

    const [title, setTitle] = useState('')
    const [newItem, setNewItem] = useState('')
    const [error, setError] = useState(false)
    const [snackbar, setSnackbar] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        context.addTitle(title)
    }, [title])

    const handleAddItem = () => {

        if (context.voteItems.length >= 10) {
            setMessage(' You can create a poll with up to 10 options')
            setSnackbar(true)
            return
        }
        if (newItem === '') {
            setError(true)
            return
        }
        const existingItem = context.voteItems.filter(i => {
            return newItem === i.item
        })

        if (existingItem.length > 0) {
            setMessage('You have already select this item')
            setSnackbar(true)
            return
        }

        context.addItem(newItem, Uuid())

        setNewItem('')
        setError(false)
    }

    const handlePressEnter = (e) => {
        if (e.keyCode === 13) {
            handleAddItem()
        }
    }

    const handleReset = () => {
        setTitle('')
        setNewItem('')
        setError(false)
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
                inputProps={{ maxLength: 80 }}

            />
            <div className="leftside__questions">
                {
                    context.voteItems && context.voteItems.map(i => {

                        return (
                            <div key={i.id}>
                                <ItemInput item={i} />
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
                        className={error ? 'input-error' : ''}
                        inputProps={{ maxLength: 30 }}
                        disabled={context.voteItems.length === 10 ? true : false}

                    />
                    <section className='icon'>
                        <FontAwesomeIcon icon={faFolderPlus} size='2x' onClick={handleAddItem}
                        />
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
            <Snack open={snackbar} closeSnack={() => setSnackbar(false)} message={message} />

        </div>
    )
}

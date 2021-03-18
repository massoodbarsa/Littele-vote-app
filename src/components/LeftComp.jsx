import React, { useContext, useState, useEffect } from 'react'
import { VoteContext } from '../context/voteContextProvider'
import { Button, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import Snack from './Snack';


export default function LeftComp() {
    const context = useContext(VoteContext)

    const [vote, setVote] = useState(context.voteItems)
    const [title, setTitle] = useState('')
    const [newItem, setNewItem] = useState('')
    const [error, setError] = useState(false)
    const [snackbar, setSnackbar] = useState(false)
    const [message, setMessage] = useState('')


    useEffect(() => {
        context.addTitle(title)
    }, [title])

    const handleDelete = (item) => {
        const newVote = context.voteItems.filter(i => i !== item)
        // setVote(newVote)
        context.updateItems(newVote)
    }

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
        if (context.voteItems.includes(newItem)) {
            setMessage('You have already select this item')
            setSnackbar(true)
            return
        }

        console.log(context.voteItems.includes(newItem));
        context.addItem(newItem)
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
                        className={error ? 'input-error' : ''}
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
            <Snack open={snackbar} closeSnack={()=>setSnackbar(false)} message={message}/>

        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { Snackbar } from '@material-ui/core';

export default function Snack({ open, closeSnack, message }) {
    const [snackbar, setSnackbar] = useState(open)

    useEffect(() => {
        setSnackbar(open)
    }, [open])

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        closeSnack();
    };
    return (
        <div className='snackbar'>
            <Snackbar
                message={message}
                key={'top' + 'center'}
                open={snackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
            </Snackbar>
        </div>

    )
}

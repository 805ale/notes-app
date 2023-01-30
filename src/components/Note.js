import * as React from 'react';
import styles from "/styles/Home.module.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ id, text, date }) => {
    return <div className={styles.notes}>
            <span>{text}</span>
                <div className={styles.footer}>
                    <small>28/01/2023</small>
                    <IconButton aria-label="delete"><DeleteIcon />
                    </IconButton>
                </div>
        </div>
};

export default Note;
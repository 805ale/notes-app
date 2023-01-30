import styles from "/styles/Home.module.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(<div className={styles.add}>
        <TextField
        variant="standard"
        multiline
        rows={5}
        style={{width:200}}
        value={noteText}
        placeholder="Type to add a note..."
        onChange={handleChange}
        />
        <div className={styles.footer}>
            <small>200 Remaining</small>
            <Button 
            variant="text"
            onClick={handleSaveClick}
            >Save</Button>
        </div>
    </div>)
}

export default AddNote;
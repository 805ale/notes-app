import styles from "/styles/Home.module.css";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";

const AddNote = () => {
    return(<div className={styles.add}>
        <TextField
        variant="standard"
        rows={8} 
        cols={10}
        placeholder="Type to add a note..."
        />
        <div className={styles.footer}>
            <small>200 Remaining</small>
            <Button 
            variant="text"
            onClick={() => {
                alert('clicked');
              }}
            >Save</Button>
        </div>
    </div>)
}

export default AddNote;
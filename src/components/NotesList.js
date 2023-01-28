import Note from './Note';
import styles from "/styles/Home.module.css";
import AddNote from './AddNote';


const NotesList = ({ notes }) => {
    return(
        <div className={styles.note}>
            <div className={styles.list}>
                {notes.map((note)=> (
                <Note id={note.id} text={note.text} date={note.date}/>
            ))}
            <AddNote />
            </div>
        </div>
    )
}

export default NotesList;
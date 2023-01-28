import styles from "/styles/Home.module.css";

const AddNote = () => {
    return(<div className={styles.add}>
        <textarea className={styles.textarea}
        rows="8" 
        cols="10"
        placeholder="Type to add a note..."
        ></textarea>
        <div className={styles.footer}>
            <small>200 Remaining</small>
            <button className={styles.save}>Save</button>
        </div>
    </div>)
}

export default AddNote;
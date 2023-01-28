import { MdDeleteForever } from 'react-icons/md';
import styles from "/styles/Home.module.css";

const Note = ({ id, text, date }) => {
    return <div className={styles.notes}>
            <span>{text}</span>
                <div className={styles.footer}>
                    <small>28/01/2023</small>
                    <MdDeleteForever className='delete-icon' size='1.3em' />
                </div>
        </div>
};

export default Note;
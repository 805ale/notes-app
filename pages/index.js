import NotesList from '../src/components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from "../styles/Home.module.css";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note",
    date: "28/01/2023"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "28/01/2023"
    },
    {
        id: nanoid(),
        text: "This is my third note",
        date: "28/01/2023"
    },
]);

 return (
    <div className={styles.container}>
        <NotesList notes={notes}/>
    </div>
 );
}
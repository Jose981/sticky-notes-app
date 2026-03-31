// src/components/NoteBoard.jsx
import { useState, useContext } from "react"
import { useNotes } from "../hooks/useNotes"
import { ColorContext } from "../context/ColorContext"
import Note from "./Note"

const NoteBoard = () => {
  const [text, setText] = useState("")
  const { notes, addNote, deleteNote } = useNotes()
  const { color } = useContext(ColorContext)

  const handleAdd = () => {
    addNote(text, color)
    setText("")
  }

  return (
    <div>
<div className="notes-container">        
    <input
          type="text"
          placeholder="Escribe una nota..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Añadir</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {notes.length === 0 ? (
<p className="empty-message">No hay notas aún</p>
        ) : (
          notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))
        )}
      </div>
    </div>
  )
}

export default NoteBoard;
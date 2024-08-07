
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  // Mock data.
  useEffect(() => {
    // Fetch notes from the backend
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  // Change title.
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  // Change content.
  const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Note edited.
    if(selectedNote != null){
      const noteEdited = {
        id: selectedNote.id,
        title: title,
        content: content
      }
      const newNotes = notes.map(note => note.id === selectedNote.id ? noteEdited : note);
      setNotes(newNotes);
    }
    // Note added.
    else{
      console.warn("CREATING")
      const response = await axios.post('http://localhost:8080/notes', {
        title,
        content
      });
      const newNote = response.data;
      setNotes([...notes, newNote])
    }
    setContent('');
    setTitle('');
  }

  // A note is selected.
  const onClickNote = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }

  // Deselect a Note.
  const handleCancel = () => {
    setSelectedNote(null);
  }

  // Remove a note.
  const handleRemove = async (note: Note, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    try {
      console.warn("ELIMINATING")
      const response = await axios.delete(`http://localhost:8080/notes/${note.id}`);
      if (response.status === 200){
        setNotes(notes.filter(n => n.id != note.id));
      }else{
        console.error('Error deleting note:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  return (
    <div className="app-container">
      <form 
        className="note-form"
        onSubmit={submit}>
        <input 
          placeholder="Title" 
          required 
          onChange={handleTitle} 
          value={title}/>
        <textarea 
          placeholder="Content" 
          rows={10} 
          required
          onChange={handleContent} 
          value={content}
         />
        {
          selectedNote ? (
            <div className="edit-buttons">
              <button type="submit">Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button type="submit">Add Note</button>
          )
        }
      </form>
      <div className='notes-grid'>
        {notes.map((note) => (
        <div className="note-item" key={note.id}
          onClick={() => onClickNote(note)}>
          <div className="notes-header">
            <button onClick={(event) => handleRemove(note, event)}>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>))}
      </div>
    </div>
  );
};

export default App;

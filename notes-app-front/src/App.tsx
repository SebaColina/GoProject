
import { useState } from 'react';
import './App.css';

type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  // Mock data.
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "test note 1",
      content: "bla bla note1",
    },
    {
      id: 2,
      title: "test note 2 ",
      content: "bla bla note2",
    },
    {
      id: 3,
      title: "test note 3",
      content: "bla bla note3",
    },
    {
      id: 4,
      title: "test note 4 ",
      content: "bla bla note4",
    },
    {
      id: 5,
      title: "test note 5",
      content: "bla bla note5",
    },
    {
      id: 6,
      title: "test note 6",
      content: "bla bla note6",
    }]);

  // Change title.
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  // Change content.
  const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
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
      notes.push({
        id: notes.length + 2,
        title: title,
        content: content
      });
      setNotes([...notes])
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
  const handleRemove = (note: Note, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setNotes(notes.filter(n => n.id != note.id));
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

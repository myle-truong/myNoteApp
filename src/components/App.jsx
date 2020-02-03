import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { createNotEmittedStatement } from 'typescript';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(note);
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    //console.log('delete was success');
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id; // tra gia tri ko giong voi id???
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

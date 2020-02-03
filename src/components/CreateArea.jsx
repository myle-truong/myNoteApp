import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Write your note..."
          rows="3"
        />
        <Fab onClick={submitNote}>
          <AddIcon fontSize="small" />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;

import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Favorite from '@material-ui/icons/Favorite';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        fontSize="small"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox
        icon={<FavoriteBorder fontSize="small" />}
        checkedIcon={<Favorite fontSize="small" />}
      />
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

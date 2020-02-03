import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Footer() {
  const myName = 'Hana Truong';
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Create by {myName} with <FavoriteIcon /> © {currentYear}
      </p>
    </footer>
  );
}

export default Footer;

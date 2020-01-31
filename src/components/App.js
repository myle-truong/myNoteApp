import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

function App() {
  return (
    <div>
      <Header />
      <Note title="This is title" content="This is content part" />
      <Footer />
    </div>
  );
}

export default App;

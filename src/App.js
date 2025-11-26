import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

// Reggae-themed dummy data
const initialBooks = [
  {
    id: 1,
    title: 'Bob Marley: The Untold Story',
    author: 'Chris Salewicz',
    publicationDate: '2009-10-27',
    publisher: 'Faber & Faber',
    isbn: '978-0-571-24561-3',
    genre: 'Biography'
  },
  {
    id: 2,
    title: 'Catch a Fire: The Life of Bob Marley',
    author: 'Timothy White',
    publicationDate: '2006-03-28',
    publisher: 'Henry Holt and Co.',
    isbn: '978-0-8050-8086-0',
    genre: 'Biography'
  },
  {
    id: 3,
    title: 'Reggae: The Rough Guide',
    author: 'Steve Barrow & Peter Dalton',
    publicationDate: '2001-11-26',
    publisher: 'Rough Guides',
    isbn: '978-1-85828-247-3',
    genre: 'Music History'
  },
  {
    id: 4,
    title: 'The Encyclopedia of Reggae',
    author: 'Mike Alleyne',
    publicationDate: '2012-10-01',
    publisher: 'Sterling',
    isbn: '978-1-4027-8586-5',
    genre: 'Reference'
  }
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (newBook) => {
    setBooks(prevBooks => [...prevBooks, { ...newBook, id: Date.now() }]);
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks(prevBooks =>
      prevBooks.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
    setEditingBook(null);
  };

  const handleDeleteBook = (bookId) => {
    if (window.confirm('Are you sure you want to remove this reggae book?')) {
      setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>🌴 Reggae Book by Arya Sona Ginting 🎵</h1>
          <p className="subtitle">One Love, One Heart, Let's Get Together and Feel alright!</p>
          <p className="subtitle">~BOB MARLEY~</p>
        </div>
      </header>
      <main className="App-main">
        <BookForm
          onAddBook={handleAddBook}
          editingBook={editingBook}
          onUpdateBook={handleUpdateBook}
          onCancelEdit={handleCancelEdit}
        />
        <BookList
          books={books}
          onEditBook={handleEditBook}
          onDeleteBook={handleDeleteBook}
        />
      </main>
      <footer className="App-footer">
        <p>Thanks to all musician in the world ~Arya Munthe 📚✨</p>
      </footer>
    </div>
  );
}

export default App;
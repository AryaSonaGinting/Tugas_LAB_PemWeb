import React from 'react';

const BookList = ({ books, onEditBook, onDeleteBook }) => {
  if (books.length === 0) {
    return (
      <div className="no-books">
        <div className="reggae-symbol">🎵</div>
        <h3>No reggae books in the library yet!</h3>
        <p>Add some books to spread the positive vibrations 📚✨</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      <h2>📚 Reggae Book Collection ({books.length})</h2>
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card reggae-card">
            <div className="book-header">
              <h3>{book.title}</h3>
              <span className="genre-badge">{book.genre}</span>
            </div>
            <p><strong>👤 Author:</strong> {book.author}</p>
            <p><strong>📅 Published:</strong> {book.publicationDate}</p>
            <p><strong>🏢 Publisher:</strong> {book.publisher}</p>
            <p><strong>🔢 ISBN:</strong> {book.isbn}</p>
            <div className="book-actions">
              <button 
                onClick={() => onEditBook(book)}
                className="edit-btn"
              >
                ✏️ Edit
              </button>
              <button 
                onClick={() => onDeleteBook(book.id)}
                className="delete-btn"
              >
                🗑️ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
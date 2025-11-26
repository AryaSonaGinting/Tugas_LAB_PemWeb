import React, { useState } from 'react';

const BookForm = ({ onAddBook, editingBook, onUpdateBook, onCancelEdit }) => {
  const [book, setBook] = useState({
    id: editingBook ? editingBook.id : Date.now(),
    title: editingBook ? editingBook.title : '',
    author: editingBook ? editingBook.author : '',
    publicationDate: editingBook ? editingBook.publicationDate : '',
    publisher: editingBook ? editingBook.publisher : '',
    isbn: editingBook ? editingBook.isbn : '',
    genre: editingBook ? editingBook.genre : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevBook => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingBook) {
      onUpdateBook(book);
    } else {
      onAddBook(book);
    }
    
    // Reset form
    setBook({
      id: Date.now(),
      title: '',
      author: '',
      publicationDate: '',
      publisher: '',
      isbn: '',
      genre: ''
    });
  };

  const handleCancel = () => {
    onCancelEdit();
    setBook({
      id: Date.now(),
      title: '',
      author: '',
      publicationDate: '',
      publisher: '',
      isbn: '',
      genre: ''
    });
  };

  return (
    <div className="book-form">
      <h2>{editingBook ? '✏️ Edit Reggae Book' : '➕ Add New Reggae Book'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>📖 Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Enter book title..."
            required
          />
        </div>
        
        <div className="form-group">
          <label>👤 Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Enter author name..."
            required
          />
        </div>
        
        <div className="form-group">
          <label>📅 Publication Date:</label>
          <input
            type="date"
            name="publicationDate"
            value={book.publicationDate}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>🏢 Publisher:</label>
          <input
            type="text"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            placeholder="Enter publisher..."
          />
        </div>
        
        <div className="form-group">
          <label>🔢 ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            placeholder="Enter ISBN number..."
          />
        </div>

        <div className="form-group">
          <label>🎵 Genre:</label>
          <select
            name="genre"
            value={book.genre}
            onChange={handleChange}
          >
            <option value="">Select Genre</option>
            <option value="Biography">Biography</option>
            <option value="Music History">Music History</option>
            <option value="Reference">Reference</option>
            <option value="Culture">Culture</option>
            <option value="Photography">Photography</option>
            <option value="Lyrics">Lyrics</option>
          </select>
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="reggae-btn">
            {editingBook ? '🔄 Update Book' : '✅ Add Book'}
          </button>
          {editingBook && (
            <button type="button" onClick={handleCancel} className="cancel-btn">
              ❌ Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookForm;
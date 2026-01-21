import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { apiRequest } from "../api/axios";

const Books = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await apiRequest("GET", "/books");
        setBooks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1>Books</h1>
          <small className="text-muted">Manage your library's book collection</small>
        </div>
        <button className="btn btn-dark">+ Add Book</button>
      </div>

      <input
        type="text"
        placeholder="Search books by title, author, or genre..."
        className="form-control mb-4"
      />

      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                  {book.title}{" "}
                  <span
                    className={`badge ${
                      book.availableCopies > 0 ? "bg-dark" : "bg-danger"
                    }`}
                  >
                    {book.availableCopies > 0 ? "Available" : "Out of Stock"}
                  </span>
                </h5>
                <p className="card-text text-muted">by {book.author}</p>
                <p className="mb-1">Genre: {book.genre}</p>
                <p className="mb-1">Published: {book.published}</p>
                <p className="mb-3">Available Copies: {book.availableCopies}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm">👁</button>
                  <button className="btn btn-outline-secondary btn-sm">✏️</button>
                  <button className="btn btn-outline-secondary btn-sm">🗑️</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

import React from 'react';
import './App.css';
import { useState } from 'react';

const bookDataBase = {
  
  javaScript : [
    { 
      name: "JavaScript and JQuery: Interactive Front-End Web Development",
      rating: "4.5/5"
    },
    { 
      name: "Head First JavaScript Programming: A Brain-Friendly Guide", 
      rating: "4/5"
    }
  ],

  fiction: [
    {
      name: "Harry Potter and the Half-Blood Prince",
      rating: "5/5"
    },
    {
      name: "The Lord of The Rings",
      rating: "4.5/5"
    }
  ],

  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

function App() {

  const [selectedGenre, setGenre] = useState("fiction");

  const genreOnClick = (genre) => {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚Exceptional Books</h1>
      <p className='top-heading'>
      {" "}
      Checkout my favorite books. Select a genre to get started
      {" "}
      </p>

      <div>
        {Object.keys(bookDataBase).map((genre) => (
          <button
            className='book-btn'
            onClick={() => genreOnClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDataBase[selectedGenre].map((book) => (
            <li 
              className="booksList"
              key={book.name}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

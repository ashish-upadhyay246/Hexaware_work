import React, { useEffect, useState } from 'react';
import BCard from './Bcard.js';

const App = () => {
  const [books, setBooks] = useState([]);
  const [sbooks, setSbooks] = useState([]);
  let [search,setSearch] = useState([]);

  useEffect(()=>setSbooks(books.filter((temp)=>temp.bookTitle.includes(search))),[search]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://all-books-api.p.rapidapi.com/getBooks';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '603886b0eamsh3b9176f969178d6p13ce59jsn836ede6bf58d',
          'x-rapidapi-host': 'all-books-api.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setBooks(result); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (<>
    <div>
      <input type="text" placeholder="Enter Book Title" onChange={(event)=>setSearch(event.target.value)}/>
    </div>
    <div>
      <p>Total Books: {books.length}</p>
      {search.length === 0 ? (
        books.map((book, index) => (
          <BCard
            key={index}
            bookTitle={book.bookTitle}
            bookImage={book.bookImage}
            bookAuthor={book.bookAuthor}
            bookDescription={book.bookDescription}
          />
        ))
      ) : (
        sbooks.map((book, index) => (
          <BCard
            key={index}
            bookTitle={book.bookTitle}
            bookImage={book.bookImage}
            bookAuthor={book.bookAuthor}
            bookDescription={book.bookDescription}
          />
        ))
      )}
    </div>
    </>
  );
};

export default App;
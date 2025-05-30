import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/book");
    setBooks(response.data.datas);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <Navbar />

      <div className="flex flex-wrap">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};
export default HomePage;

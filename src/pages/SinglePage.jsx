import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const singleBookFetch = async () => {
    const response = await axios.get("http://localhost:3000/book/" + id);
    setBook(response.data.datas);
  };
  useEffect(() => {
    singleBookFetch();
  }, []);

  // delete post
  const deleteBook = async () => {
    const response = await axios.delete("http://localhost:3000/book/" + id);
    if (response.status === 200) {
      navigate("/");
    } else {
      console.log("Delete Erro");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center p-12">
          <div className="w-full md:w-3/4 px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {book.bookName}
            </h1>
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              alt="Blog Featured Image"
              className="mb-8 rounded-3xl"
            />
            <div className="prose max-w-none">
              <p className="text-red-500">Book Price :{book.bookPrice}</p>
              <p className="text-3xl text-blue-500">
                Book Author Name: {book.bookAuthor}
              </p>
              <button
                onClick={() => deleteBook()}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                Delete
              </button>
              <Link to={`/edit-page/${book.id}`}>
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;

import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const EditPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3000/book/" + id);
    setBook(response.data.datas);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  console.log(book);
  const editBook = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      "http://localhost:3000/book/" + id,
      book
    );
    if (response.status === 200) {
      alert("Edit Successfully");
    } else {
      alert("Something Wrong");
    }
  };
  return (
    <>
      <Navbar />
      <h1 className="flex items-center justify-center ">Update page</h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={editBook}>
            <div className="mb-3">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Book Name
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={book.bookName}
                name="bookName"
                placeholder="Full Book Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Book Price
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={book.bookPrice}
                name="bookPrice"
                placeholder="Enter Book Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Book Author
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={book.bookAuthor}
                name="bookAuthor"
                placeholder="Enter Author Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Book Genre
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={book.bookGenre}
                  name="bookGenre"
                  placeholder="Enter Book Genre"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div></div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Update page
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPage;

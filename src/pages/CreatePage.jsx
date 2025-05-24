import { useState } from "react";
import Navbar from "../components/Navbar";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";
const CreatePage = () => {
  const navigate = useNavigate();
  const [bookDatas, setBookDatas] = useState({
    bookName: "",
    bookPrice: "",
    bookAuthor: "",
    bookGenre: "",
  });
  const handleChange = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;

    let { name, value } = e.target;
    setBookDatas({
      ...bookDatas,
      [name]: value,
    });
  };
  console.log(bookDatas);

  const addBook = async (e) => {
    e.preventDefault();
    try {
      //mathi state ma vanko data lai api din -- localhost:3000/book -> post method
      // post garda dueta pathaunai paryo . pathauna data ko always object hunu paro. jun at the end axois formate ma
      const response = await axios.post("http://localhost:3000/book", {
        bookDatas,
      });
      if (response.status === 200) {
        alert("New book Added Successfully!");
        navigate("/");
      } else {
        alert("Something Wrong");
      }
    } catch (err) {
      console.log("Something Wrong");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={addBook}>
            <div className="mb-3">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Book Name
              </label>
              <input
                type="text"
                name="bookName"
                onChange={handleChange}
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
                name="bookPrice"
                onChange={handleChange}
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
                name="bookAuthor"
                onChange={handleChange}
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
                  name="bookGenre"
                  onChange={handleChange}
                  placeholder="Enter Book Genre"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div></div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreatePage;

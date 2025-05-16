import { useEffect } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

const HomePage = ()=>{
  const fetchBooks = async()=>{
   const response = await axios.get("http://localhost:3000/books/")

  }
  useEffect(()=>{
  fetchBooks()
  },[])
  return(
    <>
    <Navbar/>
    <div className="flex flex-wrap">
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>
    </>
  )
}
export default HomePage
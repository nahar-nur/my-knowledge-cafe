import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const[bookMarks, setBookMarks]=useState([]);
  const handleAddToBookmark = blog=>{
    const newBookMarks =[...bookMarks, blog] ;
    setBookMarks(newBookMarks);
  }


  return (
    <>
    
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

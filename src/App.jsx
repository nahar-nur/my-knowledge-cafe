import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const[bookMarks, setBookMarks]=useState([]);
  const [readingTime, setReadingTime]=useState(0);
  const handleAddToBookmark = blog=>{
    const newBookMarks =[...bookMarks, blog] ;
    setBookMarks(newBookMarks);
  };
  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
    // remove read blog from bookmark
    console.log('remove bookmark',id);
    const remainingBookmarks = bookMarks.filter(bookmark=>bookmark.id!==id);
    setBookMarks(remainingBookmarks);
  }


  return (
    <>
    
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App

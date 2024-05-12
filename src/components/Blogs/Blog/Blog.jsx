import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
   const {title, cover, author_img, author,posted_date, reading_time, hashtags} =blog
    return (
        <div className='mb-20 space-y-4'>
            
            <img className='w-full mb-4 ' src={cover} alt={`cover picture of the title ${title}`} />
            
            <div className='flex justify-between'>
            <div className='flex gap-10 mb-4'>
                <img className='w-14' src={author_img} alt="" />
                <div className='mb-4'>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
                </div>
             </div>
             <div >
     <span>{reading_time} min read</span>
     <button onClick={()=>handleAddToBookmark(blog)} 
     className='ml-2 text-2xl text-red-600'><IoBookmarksOutline />
     </button>
 </div>
 </div>
            <div>
             <h1 className=' text-2xl mb-4'>{title}</h1>
             <p className='mb-2'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
                </p>
                <button onClick={()=>handleMarkAsRead(reading_time)} className='text-sm text-purple-800 underline'>
                    Mark as Read</button>
                </div>
                
            
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
    
}

export default Blog;
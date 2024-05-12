
import PropTypes from 'prop-types'
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3 mt-2">
            <h3 className='text-3xl text-red-800 p-4 m-4'>Readin Time:{readingTime}</h3>
           <h1 className='text-2xl m-4 text-violet-900 font-bold'>Bookmarked:{bookMarks.length}</h1>
           <div>
            
           </div>
           {
            bookMarks.map((bookmark,idx)=> <Bookmark 
                key= {idx} bookmark={bookmark}
                 ></Bookmark>)
           } 
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks: PropTypes.array,
    readingTime:PropTypes.number
}


export default Bookmarks;
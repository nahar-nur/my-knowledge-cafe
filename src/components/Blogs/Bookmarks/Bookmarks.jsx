
import PropTypes from 'prop-types'
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 mt-2">
           <h1 className='text-2xl m-4 text-violet-900 font-bold'>Bookmarked:{bookMarks.length}</h1>
           {
            bookMarks.map(bookmark=> <Bookmark 
                key={bookmark.id}
                bookmark={bookmark} ></Bookmark>)
           } 
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks: PropTypes.array
}


export default Bookmarks;
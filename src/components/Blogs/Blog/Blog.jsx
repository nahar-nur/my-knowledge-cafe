import PropTypes from 'prop-types';

const Blog = ({blog}) => {
   const {title, cover, author_img, author,posted_date, reading_time, hashtags} =blog
    return (
        <div>
            
            <img src={cover} alt={`cover picture of the title ${title}`} />
            
            <div className='flex justify-between'>
            <div className='flex gap-10'>
                <img className='w-14' src={author_img} alt="" />
                <div>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
                </div>
             </div>
             <div>
     <h6>{reading_time} min read</h6>
 </div>
 </div>
            <div>
             <h1 className=' text-2xl'>{title}</h1>
             <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
                </p>
                </div>
            
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;
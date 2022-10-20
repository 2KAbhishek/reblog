import React from 'react';
import './Post.css';
const Post = ({post: {title, description, imgUrl}, index}) => {
    return (
        <a href={process.env.PUBLIC_URL + "articles/"+ index + ".html"}>
            <div className='post-container'>
                <h1 className='heading'>{title}</h1>
                <img className='image' src={imgUrl} alt='post' />
                <p className='content'>{description.substr(0,32)}</p>
            </div>
            <br />
        </a>
    );
};

export default Post;

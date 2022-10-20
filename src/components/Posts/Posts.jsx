import React from 'react';
import './Posts.css';
import Post from '../Post/Post';
const blogPosts = require('../../data/articles.json')

const Posts = () => {

    return (
        <div className='posts-container'>
            {blogPosts.map((post, index) => (
                <Post key={index} index={index} post={post} />
            ))}
        </div>
    );
};

export default Posts;

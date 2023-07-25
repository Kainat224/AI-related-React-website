import React from 'react';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gp3__blog section__padding' id='blog'>
      <div className='gp3__blog-heading'>
        <div className='gradient__text'>
          <h1>A lot is happening, We are blogging about it.</h1>
        </div>
        <div className='gp3__blog-container'>
          <div className='gp3__blog-container_groupA'>
            <Article imageUrl={blog01} date={'Sep 26, 2021'} title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
          </div>
          <div className='gp3__blog-container_groupB'>
            <Article imageUrl={blog02} date={'Sep 26, 2021'} title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
            <Article imageUrl={blog03} date={'Sep 26, 2021'} title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
            <Article imageUrl={blog04} date={'Sep 26, 2021'} title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
            <Article imageUrl={blog05} date={'Sep 26, 2021'} title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
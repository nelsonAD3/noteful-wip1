import React from 'react';
// import Rating from '../Rating/Rating';
// import './BookmarkItem.css';

export default function NoteItem(props) {
  return (
    <li className='NoteItem'>
      <div className='NoteItem__p'>
        {/* <h3 className='BookmarkItem__title'>
          <a
            href={props.url}
            target='_blank'
            rel='noopener noreferrer'>
            {props.title}
          </a>
        </h3>
        <Rating value={props.rating} />
      </div>
      <p className='BookmarkItem__description'>
        {props.description}
      </p>
      <div className='BookmarkItem__buttons'>
      */}
        <p>{props.name}</p>
        <p>{props.modified}</p>
        
      
        <button
          className='NoteItem__description'
          onClick={() => props.onClickDelete(props.id)}
        >
          Delete
        </button> 
        </div>
    </li>
  )
}

// BookmarkItem.defaultProps = {
//   onClickDelete: () => {},
// }

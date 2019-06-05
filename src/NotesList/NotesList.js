import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
// import './BookmarkList.css'

class NotesList extends Component {
  static defaultProps = {
    notes: []
  };

  render() {
    const { notes } = this.props.notes
    console.log(notes);
    return (
      <section className='NotesList'>
        <h2>Notes</h2>
        <ul className='NotesList__list' aria-live='polite'>
            {/* <NoteItem notes={notes}/>
            <NoteItem notes={notes}/>
            <NoteItem notes={notes}/> */}
          {notes.map(note =>
            <NoteItem
              key={note.id}
              {...note}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default NotesList;

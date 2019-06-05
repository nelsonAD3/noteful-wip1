import React from 'react';
import { Link } from 'react-router-dom';

export default function FolderNav(props) {
  return (
  <aside>
    <section className='Nav'>
    <ul>
        <li>
            {/* each link will have probably provide a function that displays the notes
            related to that folder AND clears the notes there, but this doesnt seem 
            component-based
            
            Actually think it will have to pass state back to App.js then have it render
            with appropriate Notes showing*/}
            <Link to={'/'}>
                Folder 1
            </Link>
            {' '}
         </li>
         <li>
            <Link to={'/'}>
                Folder 2
            </Link>
            {' '}
         </li>
         <li>
            <Link to={'/'}>
                Folder 3
            </Link>
            {' '}
         </li>

    </ul>
      {' '}
      <Link to={'/add-folder'}>
        Add Folder
      </Link>
    </section>
    </aside>
  );
}
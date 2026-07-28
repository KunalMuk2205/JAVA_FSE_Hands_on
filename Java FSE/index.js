import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('books');

  let viewComponent;
  if (view === 'books') {
    viewComponent = <BookDetails />;
  } else if (view === 'blogs') {
    viewComponent = <BlogDetails />;
  } else {
    viewComponent = <CourseDetails />;
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Cognizant Blogger Hub</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setView('books')} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: view === 'books' ? '#00599c' : '#f0f0f0', color: view === 'books' ? 'white' : '#333', border: '1px solid #ccc', borderRadius: '4px' }}>Books</button>
        <button onClick={() => setView('blogs')} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: view === 'blogs' ? '#00599c' : '#f0f0f0', color: view === 'blogs' ? 'white' : '#333', border: '1px solid #ccc', borderRadius: '4px' }}>Blogs</button>
        <button onClick={() => setView('courses')} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: view === 'courses' ? '#00599c' : '#f0f0f0', color: view === 'courses' ? 'white' : '#333', border: '1px solid #ccc', borderRadius: '4px' }}>Courses</button>
      </div>
      <div>
        {viewComponent}
      </div>
    </div>
  );
}
export default App;

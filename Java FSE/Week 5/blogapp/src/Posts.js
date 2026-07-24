import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`An error occurred in component: ${error}`);
    this.setState({ error: error.toString() });
  }

  render() {
    const { posts, error } = this.state;
    if (error) {
      return <div style={{ color: 'red', padding: '20px' }}>Error: {error}</div>;
    }
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Blog Posts</h2>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.slice(0, 10).map(post => (
            <div key={post.id} style={{ borderBottom: '1px solid #ccc', margin: '15px 0', paddingBottom: '10px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;

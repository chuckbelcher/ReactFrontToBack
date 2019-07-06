import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    //Use this to load data
    console.log('Component did mount');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {
        console.log(post);
        this.setState({
          title: post.title,
          body: post.body
        });
        console.log(this.state);
      });
  }

  //   componentWillMount() {
  //     console.log('Component will mount');
  //   }

  //   componentDidUpdate() {
  //     console.log('Component did update');
  //   }

  //   componentWillUpdate() {
  //     console.log('Component will update');
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log('Component will receive props');
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     return null;
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4 mb-5">React Test Component</h1>
        <h4>
          Post from{' '}
          <a
            href="https://jsonplaceholder.typicode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jasonplaceholder.typicode.com
          </a>
        </h4>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;

import React, { Component } from 'react';
import { listCategories, listPosts } from '../actions';
import { connect } from 'react-redux';
import './App.css';

import TopBar from './components/topBar'

class App extends Component {

  componentDidMount() {
    this.props.listCategories();
    this.props.listPosts();
  }

  render() {
    console.log(this.props.posts)
    console.log(this.props.categories)
    return (
      <div className="App">
        <TopBar categories={this.props.categories} />

        <ul>
          {this.props.posts.map(data => 
            <li key={data.id}>{data.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({categories, posts}) {
  return {
    categories,
    posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listPosts:() => listPosts(dispatch),
    listCategories:() => listCategories(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

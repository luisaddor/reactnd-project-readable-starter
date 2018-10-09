import React, { Component } from 'react';
import { listCategories, listPosts } from '../actions';
import { connect } from 'react-redux';
import './App.css';

import TopBar from './topBar'

class App extends Component {

  componentDidMount() {
    this.props.listPosts();
    this.props.listCategories();
  }

  render() {
    return (
      <div className="App">
        <TopBar categories={this.props.categories} />
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

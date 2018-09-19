import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subreddit: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      subreddit: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter a topic" value={this.state.subreddit} onChange={this.handleChange}/>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
          Fetch Posts
        </button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)

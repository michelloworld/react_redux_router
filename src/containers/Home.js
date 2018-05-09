import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { listPost } from '../actions/PostAction'

import { Link } from 'react-router-dom'

class Home extends React.Component {
	componentDidMount() {
		this.props.listPost()
	}

	render() {
		return (
			<div>
				<Link to="/about_us">About Us</Link>

				<br/>
				<br/>

				<h3>Home</h3>

				{this.props.posts.map((post, key) => {
					return (
						<div key={key}>{post.title}</div>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.post.posts
  }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ listPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
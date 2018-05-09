import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router-dom'

class AboutUs extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>

				<br/>
				<br/>

				<h3>About Us</h3>
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
	return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)
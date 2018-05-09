import React from 'react'

import { Route } from 'react-router-dom'

import AboutUs from '../containers/AboutUs'

class OtherLayout extends React.Component {
	render() {
		return (
			<Route exact={this.props.exact == undefined ? true : this.props.exact} path={this.props.path} render={matchProps => (
        <div>
					<h3>Other Layout</h3>
					<this.props.component {...matchProps} {...this.props} />
				</div>
      )} />
		)
	}
}

export default OtherLayout
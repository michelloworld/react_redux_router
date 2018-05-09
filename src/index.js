import React from 'react'
import ReactDOM from 'react-dom'

import routes from './routes'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>
	, document.getElementById('app')
)
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './containers/Home'
import AboutUs from './containers/AboutUs'

import AppLayout from './layouts/AppLayout'
import OtherLayout from './layouts/OtherLayout';

export default (
	<BrowserRouter>
		<div>
			<AppLayout exact path="/" component={Home} />
			<OtherLayout path="/about_us" component={AboutUs} />
		</div>
	</BrowserRouter>
)
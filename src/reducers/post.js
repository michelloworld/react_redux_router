const post = (state = { posts: [] }, action) => {
	switch(action.type) {
		case 'LIST_POST':
			return { ...state, posts: action.payload }
		default:
			return state
	}
}

export default post
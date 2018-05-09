import axios from 'axios'

export const listPost = () => {
	return (dispatch) => {
		return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			dispatch({ type: 'LIST_POST', payload: res.data })
		})
	}
}
import { useSelector } from 'react-redux'

export default () => {
	return useSelector(state => {
		let response = {}
		for (const key of Object.keys(state)) {
			response[key] = state[key]
		}
		return response
	})
}

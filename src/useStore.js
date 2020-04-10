import { useSelector } from 'react-redux'

const stateHandler = (state = {}) => {
	let response = {}
	for (const key of Object.keys(state)) {
		response[key] = state[key]
	}
	return response
}

export default () => useSelector(stateHandler)

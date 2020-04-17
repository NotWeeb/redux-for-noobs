import useStore     from './useStore'
import simpleStore  from './simpleStore'
import OPTIONS      from './utils/OPTIONS'
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'


export {
	Provider,
	OPTIONS,
	simpleStore,
	applyMiddleware,
	useStore
}

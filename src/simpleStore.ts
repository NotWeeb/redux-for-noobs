import {Action, createStore, Store} from 'redux'
import setState from "./utils/setState"
import upperFirst from "./utils/upperFirst"
import clean from "./utils/clean"

import OPTIONS from './utils/OPTIONS'

const ACTIVE_OPTIONS = []

/**
 * @param defaultState {Object}
 * @param options {Array<OPTION>}
 * @returns {Store<Object, Action>}
 */
const simpleStore = (defaultState: Object = {}, options: Array<OPTIONS> = []): Store<Object, Action> => {

    if (typeof defaultState !== 'object') {
        throw new TypeError("'defaultState' must be an object with default values set or strings of 'any'.")
    }

    if (options && typeof options !== 'object') {
        throw new TypeError("'options' must be an object.")
    }

    if (options) {
        for (const optionFlag of options) {
            ACTIVE_OPTIONS.push(optionFlag)
        }
    }

    const states = Object.keys(defaultState)
    const customState = {}
    Object.defineProperty(customState, '__types__', { value: {} })

    const reduxReducer = (state: Object = customState, reduxAction: Object|Action) => {
        // @ts-ignore
        const { name, value } = reduxAction
        const action = state && state[name]
        if (action) {
            state[name] = value
        }
        return state
    }

    const reduxStore = createStore(reduxReducer)

    for (let rawName of states) {
        // @ts-ignore
        const name = ACTIVE_OPTIONS.includes(OPTIONS.STRICT_NAMING) ? clean(rawName) : rawName
        // @ts-ignore
        Object.defineProperty(customState.__types__, name, {
            get: () => typeof defaultState[rawName]
        })
        Object.defineProperty(customState, `set${upperFirst(name)}`, {
            // @ts-ignore
            enumerable: true,
            get: () => value => setState(name, value, customState, reduxStore, ACTIVE_OPTIONS)
        })
        customState[name] = defaultState[rawName]
    }

    return reduxStore

}

export default simpleStore
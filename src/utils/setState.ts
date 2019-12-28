import OPTIONS from './OPTIONS'

const ANY_TYPES = ['*', 'any']

const setState = (name, value, state, store, ACTIVE_OPTIONS: Array<OPTIONS> = []) => {
    const type = state.__types__[name]
    // @ts-ignore
    if (typeof value !== type && !ANY_TYPES.includes(type) && ACTIVE_OPTIONS.includes(OPTIONS.STRICT_TYPES)) {
        throw new TypeError(`"${name}" was set using type "${type}" but you used type "${typeof value}" instead.`)
    }
    return store.dispatch({ type: `SET_${name.toUpperCase()}`, name, value })
}

export default setState
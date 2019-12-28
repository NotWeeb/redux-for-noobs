
const simpleSelector = state => {
    let response = {}
    for (const key of Object.keys(state)) {
        response[key] = state[key]
    }
    return response
}

export default simpleSelector
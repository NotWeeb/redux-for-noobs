
const clean = (str = '') => str
    .replace(/[^A-z0-9_\-]+/gi, ' ')
    .trim()
    .replace(/ +/gi, '')

export default clean

const clean = (str = '') => str
    .replace(/[^A-z_\-]+/gi, ' ')
    .trim()
    .replace(/ +/gi, '')

export default clean
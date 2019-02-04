module.exports = function lib(string) {
    if (typeof string != 'string') throw new TypeError('Lib wants a string!');
    return string.replace(/\s/g, '');
}
function vertMirror(strng) {
    let strArr = strng.split('\n').map(e => e.split('').reverse().join(''))
    return strArr.join('\n')
}
function horMirror(strng) {
    let strArr = strng.split('').reverse().join('').split('\n').map(e => e.split('').reverse().join(''))
    return strArr.join('\n')
}
function oper(fct, s) {
    return fct(s)
}


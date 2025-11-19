decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(word => word.split(' ').map(code => MORSE_CODE[code]).join('')).join(' ')
}

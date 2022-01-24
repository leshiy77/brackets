module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
  for (let i = 0; i < str.length / 2; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (strArr.join('').indexOf(bracketsConfig[j].join('')) !== -1) {
        strArr.splice(strArr.join('').indexOf(bracketsConfig[j].join('')), 2);
      }
    }
  }
  return strArr.length === 0;
}

const singleNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }
  
  const dozens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    2: 'twen',
    3: 'thir',
    4: 'for',
    5: 'fif',
    8: 'eigh',
    minDoz: 'teen',
    maxDoz: 'ty'
  }

  const getMinTwenty = (num) => {
    let strNum = num.toString().slice(1);
      let result = "";
      switch (parseInt(strNum)) {
        case 0 : result = dozens[10];
        break;
        case 1 : result = dozens[11];
        break;
        case 2 : result = dozens[12];
        break;
        case 3 : result = `${dozens[3]}${dozens.minDoz}`;
        break;
        case 5 : result = `${dozens[5]}${dozens.minDoz}`;
        break;
        case 8 : result = `${dozens[8]}${dozens.minDoz}`;
        break;
        default : result = `${singleNumbers[strNum]}${dozens.minDoz}`
      }
      return result;
  }
  
  const getDozens = (num) => {
    let numDozens = Math.trunc(num / 10);
      let result = "";
      switch (numDozens) {
        case 2 : result = `${dozens[2]}${dozens.maxDoz}`;
        break;
        case 3 : result = `${dozens[3]}${dozens.maxDoz}`;
        break;
        case 4 : result = `${dozens[4]}${dozens.maxDoz}`;
        break;
        case 5 : result = `${dozens[5]}${dozens.maxDoz}`;
        break;
        case 8 : result = `${dozens[8]}${dozens.maxDoz}`;
        break;
        default : result = `${singleNumbers[numDozens]}${dozens.maxDoz}`;
      }
      let secondPart = num.toString().slice(1);
      return (secondPart !== "0" ) ? `${result} ${singleNumbers[parseInt(secondPart)]}` : result;
  }

module.exports = function toReadable (num) {
    let readableNum = "";
  if (num < 10) {
    readableNum = singleNumbers[num];
  } else if (num < 20) {
    readableNum = getMinTwenty(num);
  } else  if (num < 100) {
    readableNum = getDozens(num);
  } else  if (num < 1000) {
    let finalResult = "";
    let numHundreds = Math.trunc(num / 100);
    let firstResult = `${singleNumbers[numHundreds]} hundred`;
    let secondPart = num.toString().slice(1);
    if (parseInt(secondPart) === 0) {
      finalResult = firstResult;
    } else if (parseInt(secondPart) < 10 ) {
      finalResult = `${firstResult} ${singleNumbers[+secondPart]}`
    } else if (parseInt(secondPart) < 20) {
      finalResult = `${firstResult} ${getMinTwenty(+secondPart)}`
    } else if (parseInt(secondPart) < 100) {
      finalResult = `${firstResult} ${getDozens(+secondPart)}`
    }
    readableNum = finalResult;
  }
  return readableNum;
}

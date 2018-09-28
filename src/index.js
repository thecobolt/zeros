module.exports = function getZerosCount(number) {
    var a = number, b = 0, c = 0; 
    while (Math.floor(a/5) >= 1) {   
    b = Math.floor(a/5); 
    c = c + b;
    a = b; 
    }
      return c;
  }


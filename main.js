/** old way of declaring default values - ES5 */
var calculateArea = function(height, width) {  
  height =  height || 50;
  width = width || 80;

  return height * width;
}

/** new way of declaring default values - ES6 */
// let calculateArea = function(height = 100, width = 50) {  
//   return height * width;
// }

console.log(calculateArea())
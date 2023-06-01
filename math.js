const square = (x) => x * x;
const PI = 3.14159;
const add = (x, y) => x + y;

const math = {
  add: add,
  PI: PI,
  square: square,
};

module.exports = math;

// The methods below allow you to indivudally add methods
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

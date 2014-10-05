'use strict';

var Problem   = require('../problem.js'),
    Solution  = require('../solution.js'); 

var problem = new Problem('problem001');

problem.solutions.push(new Solution(function (n) {
  var sum = 0;
  for(var i = 1; i < n; i++) {
    this.operations++;
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}));

problem.solutions.push(new Solution(function (n) {
  var sumMultiplesOf = function (self, n, max) {
    var sum = 0;
    if(n > max) {
      return sum;
    }
    for (var i = n; i < max; i += n) {
      self.operations++;
      sum += i;
    }
    return sum;
  };

  return sumMultiplesOf(this, 3, n) + sumMultiplesOf(this, 5, n) - sumMultiplesOf(this, 15, n);
}));

problem.solutions.push(new Solution(function (n) {
  var sumMultiplesOf = function (self, number, max) {
    var sum = 0;
    if(number > max) {
      return sum;
    }
    var n  = Math.floor(max / number),
        a1 = number,
        an = n * number;
    sum = (a1 + an)/2*n;
    self.operations++;
    return sum;
  };

  return sumMultiplesOf(this, 3, n) + sumMultiplesOf(this, 5, n) - sumMultiplesOf(this, 15, n);
}));

problem.run();
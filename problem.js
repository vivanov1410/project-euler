'use strict';

var moment = require('moment');

function Problem(name) {
  this.name = name;
  this.solutions = [];
}

Problem.prototype.startTimer = function () {
  this.from = moment();  
};

Problem.prototype.endTimer = function () {
  return moment().diff(this.from);
};

Problem.prototype.run = function () {
  var N = 1000;
  for(var i = 0; i < this.solutions.length; i++) {
    var solution = this.solutions[i];
    this.startTimer();
    var answer = solution.main(N);
    console.log(this.name + '. Solution ' + (i+1));
    console.log('N = ' + N);
    var time = this.endTimer();
    console.log('Answer: ' + answer);
    console.log('Time: ' + time + 'ms');
    console.log('Operations: ' + solution.operations);
  }
};

module.exports = exports = Problem;
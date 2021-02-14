const assert = require('assert');
const add = require('./');

const expected = 2;
const inputA = 1;
const inputB = 1;
const actual = add(inputA, inputB);
assert.ok(actual === expected);

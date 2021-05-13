// Your code here
let mapToNegativize = (arr) => arr.map(a => -a)
let mapToDouble = (arr) => arr.map(a => a * 2)
let mapToSquare = (arr) => arr.map(a => a * a)
let mapToNoChange = (arr) => arr
let reduceToTotal = (arr, start = 0) => arr.reduce(((a, b)=> a + b), start)
let reduceToAllTrue = (arr) => arr.reduce((a, b)=> !!a && !!b)
let reduceToAnyTrue = (arr) => arr.reduce((a, b)=> !!a || !!b)
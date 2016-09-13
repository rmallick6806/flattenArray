flattenArray
========

A simple method that recursively flattens an arbitrarily nested array of arrays. Built specifically for integer values, it will skip any non-integer values. The method checks to see of value at index is an array type, at which point, it will recursively call the function, or push the value into final output array.

## reasoning

The method is built on simple, rudimentary JS methods and semantics. As such, it can be easily read by non-JS speakers, and translated into other languages with mild tweaks. Additionally, a for-loop method, though passé, affords mildly better performance for heavily deeply nested arrays.  

## installation

```
git clone https://github.com/rmallick6806/flattenArray.git
cd flattenArray
npm i
```

## examples

The method will output as follows:

```
var array = [[1, 2, 3, [4]], 5, 6];
var output = flattenArray(array)
 ->  [1, 2, 3, 4, 5, 6]


 var array = [[1, 2, 3, [4]], 'a', 6];
 var output = flattenArray(array)
  ->  [1, 2, 3, 4, 6]
```

## test

At root, run `mocha` after installing the library globally.

```
npm i -g mocha
mocha
```

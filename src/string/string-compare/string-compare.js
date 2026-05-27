/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/

function compare (stringA, stringB) {
  if (stringA == null || stringB == null || stringA.length !== stringB.length) {
    return -1;
  }
  let count = 0;
  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] === stringB[i]) count++;
  }
  return count;
}

module.exports = compare;

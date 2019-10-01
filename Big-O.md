# Big O Drills - Ben/Fabian

## 1. What is the Big O for this?

`Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"`

`Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.`

1. O(1) - Constant time, because you only have to ask once before an answer comes back.

2. O(n) - Linear time, because you always have to ask each person. The time it takes to ask grows directly in proportion to the number of people that need to be asked.

## 2. Even or Odd

```javascript
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}
```

O(1) - Linear time, because no matter what value you input, the function only has to perform one check.

## 3. Are you here?

```javascript
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
```

O(n^2) - Polynomial time, because the function loops within a loop, meaning that as the input size grows, the time it takes to loop over it doubly increases exponentially.

## 4. Doubler

```javascript
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
```

O(n) - Linear time, because the function has to perform an operation on every element of an array, meaning that as the array size grows, the time it takes to double each element grows in equal proportion.

## 5. Naive Search

```javascript
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
```

O(n) - Linear time, because the function has to check every element of an array, meaning that as the array size grows, the time it takes to check each element grows in equal proportion.

## 6. Creating pairs

```javascript
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}
```

O(n^2) - Polynomial time, because the function loops within a loop, meaning that as the input size grows, the time it takes to loop over it doubly increases exponentially.

## 7. Compute the sequence

```javascript
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
```

O(1) - Linear time, because it has to check the result for each integer up to the num parameter, meaning that as the input number becomes larger, the time it takes to check each integer grows in direct proportion.

## 8. An efficient search

## 9. Random element

## 10. What am I?

## 11. Tower of Hanoi

## 12. Iterative Version

## 13. Recursive Big O

## 14. Iterative Big O

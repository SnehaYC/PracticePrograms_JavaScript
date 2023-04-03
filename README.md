<!-- @format -->

# Basic Concepts: Functional Programming with JavaScript ES6+

## Chaptor I - First-Class Function

### Topic 1. Arrow function in ES6

- An arrow function expression is a compact alternative to a traditional function expression
- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
- Arrow functions cannot use yield within their body and cannot be created as generator functions.

```javascript
1. const add = (x, y) => {
        const sum = x + y;
        return sum;
    }
2. const add = (x, y) => x + y;

3. const double = number => number * 2; //one arg

4. const sayHello = () => console.log('Hey');

5. const getPersonData = () => ({
    name: 'Sneha',
    age: 24,
    job: 'Programmer',
});            // object

const myArrowFuntion = (arg1, arg2) => ({
    name: 'Sneha',
});
```

### Topic 2. Function as data

### Topic 3. Passing funtion as arguments

### Topic 4. Returning funtions

### Topic 5. Closure

- closure means that when we define a function that returns another function, the function that we returned still has access to the internally scope of the function that returned it.

### Topic 6. Implement private variable

### Topic 7. Higher order funtion

## Chaptor II - Functional Parts

### Topic: I - Spread Operator

- This oprator used to manipulate object and array

### Topic: II - Mapping

- If we want to convert each of the individual elements in the array to some other form.
- For example, we might have an array of numbers and we might want to double all the numbers in the array.
- Functions like map don't actually change the original array we're calling the functions on. They just return a modified copy. So just calling map on an array, for example, without defining another constant to hold the result, essentially does nothing.

### Topic: III - Filtering

- Filter is used when you want to find all of the elements in an array that fit some kind of criteria. For example if we have an array of numbers and we want to get all the numbers from it that are even.
- The main difference between Filter and Map is the type of function that we pass into it.
  - In Map, we pass in a function that returns a value for each element in the array. And the return value of this function represents what the element becomes in our new array.
  - On the other hand, for Filter, we pass it a function that returns either true or false for each element. If the function that we pass returns true for a given element, then that element's included in the final array. Otherwise, it's left out.

### Topic: IV - Every/some

- JavaScript's built-in every and some functions are similar to this in that we pass them a function that returns either true or false for each element.
- But the difference is that instead of returning an array, every and some return a single Boolean, true or false.
- Every returns true if and only if a given condition is true for every single element in our array. Otherwise, it returns false.
- So, for example, if we have an array of all odd numbers and we call every with a function that checks if a number is odd, it will return true. But if there's a single even number in our array, it will return false. And, if the array contains all even numbers, it will return false.
- Now 'some', on the other hand, returns true if the condition is true for any of the elements in our array. In other words, it returns false if and only if the condition is false for every element in our array.
- If we have an array of all odd numbers and we call 'some' with a function that checks if a number is odd, it will return true. And if we have a single even number in our array, it will still return true all the way down to if there's only one odd number in the array, where it will still return true.
- The only time it will return false is if we have an array of all even numbers.
- So then, comparing the output of every and some, we see that their return values will be exactly the same if we call them on an array where the condition is either true for all the elements or false for all the elements.
- [false,true,false,true,true] => every => false
- [false,true,false,true,false] => some => true

### Topic: V - Slicing

### TOpic: VI - Sorting

### Topic: VII - Reducing

### Topic: VIII - Combinind functions

### Challange: Recreate the map function

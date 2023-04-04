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

- Slice is not a higher order function.
- what does slice do exactly?
  -normally slice is used to get a section of the elements from an array.
  - For example, if we have an array of numbers zero to 10, we can get a subset of these numbers by calling slice.
- the first argument tells slice which index of the array to start on.
- the second argument tells slice which index to stop before.
- the default arguments for slice, if we simply call slice without any arguments
- sort(), reverse(), push(), pop() these functions doesn't return copy of the original array they actually mutate the original array.

### TOpic: VI - Sorting

### Topic: VII - Reducing

- It take an array of data, and reduce it down to a single value.
- what's the syntax of reduce?
  - Reduce, like most of our other built-it array functions, takes a function as an argument. The form of this function however is a little different from what we've seen with map and filter.
  - This function in it's simplest form takes two arguments.
  - The first argument represents the current value that we've built up on top of the initial value. We call this argument the accumulator, and by convention, we just use the abbreviation acc in the function's arguments.
  - The second argument represents the current element of the array that we're looking at, much like in the map or filter functions.
  - And the purpose of this function that we pass to reduce is to tell reduce how to combine the current value of the accumulated variable, what we've got so far, with the current element that we're looking at.
  - When we want to calculate the sum of an array of numbers for example, our function will simply return the accumulator argument, plus the current element.
  - In addition to the function that we pass it as an argument, we have to remember to provide it with another argument- the starting value. This is the value that reduce will start with when looking at the elements in our array.
  - In other words, when the function we pass to reduce is called for the very first time, our accumulator argument will be equal to the starting value, and the second argument will be equal to the first element in our array.

### Topic: VIII - Combined functions

### Challange: Recreate the map function

## Advanced functional concept

### Currying and partial application

- Partial application is when we take a function that has some number of arguments, and we fix some of those arguments to a set value.
- This gives us a function with less arguments than we had before.
- This function with fixed arguments can then be called from anywhere else in code, and it will be as if we had called the original function with all of its arguments.

### Recursion

- when a function calls itself is known as recursion.

### Functions as objects

- Properties of fun:

  - name(returns name of func),
  - length(returns number of arg which func accepts),
  - toString()(returns string representation of func code)
  - call
    - basically just calls our function
    - The first argument of this call function allows us to change the value of the this keyword if we used it in our function.
    - In functional programming, we'll only use the this keyword inside functions very rarely, so we usually just end up passing null in for the first argument, and the rest of the arguments that we pass to call will be passed to our function and the result will be returned.
  - apply - Apply is almost exactly the same as call, the only difference is that instead of passing the arguments we want to call our function with in the usual way, we pass apply an array of values which it passes to our function as arguments.
  - bind
    - If we want to fix one of the arguments in our add function, we simply have to call bind, and pass it the value we want to fix the first argument.
    - So if we wanted to fix the first argument x, we could just pass one as the second argument to bind.

## Challanges

### Challange - 1 Convert array

### Challange - 2 Anagrams

### Challange - 3 Error messages

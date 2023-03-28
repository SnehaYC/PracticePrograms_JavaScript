<!-- @format -->

# Basic Concepts

## I - First-Class Function

1. Arrow function in ES6
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

2. FUnction as data
3. Passing funtion as arguments
4. Returning funtions
5. Closure
6. Implement private variable
7. Higher order funtion

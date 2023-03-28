<!-- @format -->

# Basic Concepts

## I - First-Class Function

1. Arrow function in ES6
   - An arrow function expression is a compact alternative to a traditional function expression
   - Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
   - Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
   - Arrow functions cannot use yield within their body and cannot be created as generator functions.

````javascript
``` const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
````

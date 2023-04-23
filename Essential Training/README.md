<!-- @format -->

## Introduction

### JavaScript

### ECMAScript

- The browser implementation specification for JavaScript is called ECMAScript, named after the European Computer Manufacturers Association, ECMA.
- This group is in charge of defining the specification for JavaScript.
- ECMAScript is not the language itself, but the official description of how the language should be interpreted by browsers. This is meant to ensure that when you write JavaScript, it behaves the same way no matter what browser is used.
- When people say they write ECMAScript or ES6 or 2015 or 2017 or 2020 or something like that, they usually mean they're writing JavaScript that is at the cutting edge of development, effectively, the JavaScript of the future.
- When people write some version of ECMAScript, they typically use a tool called Babel to convert their code back into JavaScript the current browser can read.

## Up and Running with JavaScript

- Defer attribute
  - This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
  - Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.

## Objects

- JavaScript is a prototype based object oriented programming language. That means, at its core, when we work with JavaScript, we're working with objects, and these objects are based on prototype.
- JavaScript is a prototype based object oriented programming language. That means, each object is a unique instance of an object prototype.
- An object can also have methods used to change the properties of the object. These methods are also named value pairs. Only in a method, the value is a function or a call to a function.
  Ex.

```Javascript
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {  //another object
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) { //methods
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  }
}
```

- The this keyword, simply refers to the current object. So we're saying this object right here. That way we're referring to the context of the current object and not some other object. So this lidOpen, lidStatus just means the current object's lidOpen property, should be changed to the value of lidStatus.
- <B>Objects are typically constants</B>, meaning while we can change the properties of the object inside the container, we can't remove or replace the object from the container.
- There are two ways of accessing object properties:
  - dot notation: console.log("strap length L:",backpack.strapLength.left);
  - bracket notation:
    - 1> console.log("Value:",backpack["pocketNum"]);
    - 2> var query = "pocketNum";<br> console.log("Value:",backpack[query]);

## Sidebar: String Output

## DOM

## Sidebar: Variables and Date type

## Arrays

## Functions and Methods

## Events

## Troubleshooting and Validating JavaScript

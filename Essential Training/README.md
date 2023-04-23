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

- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
- If you want to do something in the DOM you start by finding the element or elements you want to work with.
- For this, we have two methods:<b> query selector and query selector all</b>. And they both apply to the document object.
- These methods use standard CSS queries to climb through the DOM tree and find the specified elements. So if you know how to target things with CSS you also know how to target things using JavaScript via these methods.
- There are two other methods used to access elements, <B>getelementsbyClassName and getelementbyId </B>. Note that get elements by class name has the plural of elements whereas the by id one has the singular of element. These two methods used to be the only tools we had for accessing elements using classes and ids and they still work, but queryselector and queryselectorall were introduced to simplify this process and remedy some of the shortcomings of these older methods.
- getelementsbyClassName returns an array-like object of all the nodes or child elements matching the query. The query is string of space separated class names.

## Sidebar: Variables and Date type

## Arrays

## Functions and Methods

## Events

## Troubleshooting and Validating JavaScript

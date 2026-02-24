1. What is the difference between getElementById, getElementsByClassName,quarySelector,quarySelectorAll?
Answer:
getElementById:
1. Selects an element using id.
2. Always returns one single element.
3. Very fast method
4. Cannot use CSS selectors
Example: const element=document.getElementById("myBox");
getElementsByClassName:
1. Selects elements using class name.
2. Returns multiple elements.
3. Returns an HTMLCollection
4. It is live(Automatically updates if DOM changes)
Example: const elements=document.getElementByClassName("item");
quarySelector:
1. Accepts any valid CSS selector.
2. Returns only the first matching element.
3. Returns a single element
4. It is static(not live).
Example: const firstElement=document.quarySelector(".item");
querySelectorAll:
1. Accepts any valid CSS selector.
2. Returns all matching elements.
3. Returns a NodeList.
4. It is Static (does not auto update when DOM changes).
Example: const allElement=document.quarySelectorAll(".item");

2. How do you create and insert a new element into the DOM?
Answer:
Step-1: Create a new element:
Using document.createElement()
const newElement=document.createElement('div');
Step-2: Add Content to the element:
Using innerText
newElement.innerText='I am new element';
Step-3: Select the parent element
const container=document.getElementById("container");
Step-4: Insert the element into the DOM
container.appendChild(newElement);

3. What is event Bubbling? And how does it work?
What is event Bubbling?
Answer:
Event Bubbling is a mechanism in JavaScript where an event starts from the target elenent and then propagates upward through its parent elements, all the way up to the document.
How does it work?
Answer:
Understanding through example:
Code:
<div id="parent">
  <button id="child">Click Me</button>
</div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function () {
  console.log("Parent clicked");
});

child.addEventListener("click", function () {
  console.log("Child clicked");
});

What happens when you click the button?
Step-1:
The event is triggered on the button(child element).
Console: "Child clicked"
Step-2:
The event bubbles up to the parent.
Console: "Parent click"
The browser follows this default event flow:
Step-1:
Capturing phase(top to down)
Step-2:
Target phase
Step-3:
Bubbling phase(bottom to up)

4. What is event delegation in JavaScript? Why it is useful?
What is event delegation in JavaScript?
Answer:
Event delegation is a technique where you attach one event listener to a parent elemtn instead of adding separate event listeners to multiple child elements.
It works because of event bubbling, the event starts from the target element and bubbles up to its parent.

Why event delegation is useful?
Answer:
1. Better performance.
2. Works of dynamically added elements.
3. Cleaner and more maintainable code.

5. What is the difference between preventDefault() and stopPropagation() method?
Answer:
preventDefault() method:
1. Prevent the default browser behavior of an element.
2. Prevent link navigation

stopPropagation() method:
1. Stops the event from moving (bubbling) to parent elenents.


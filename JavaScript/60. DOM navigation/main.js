// DOM Navigation = proces nawigacji przez strukture
//                  dokumentu HTML korzystając z JavaScriptu

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// --------- FirstElementChild ---------

const element = document.getElementById("fruits"); // biorę listę uporządkowaną jako jeden element
const firstChild = element.firstElementChild; // biorę pierwszy element z tej listy
firstChild.style.backgroundColor = "yellow"; // zmieniam tło tego pierwszego elementu na kolor żółty

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})
// --------- LastElementChild ---------

const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "lightgreen";

ulElements.forEach(ulElement => {
    const lastChilds = ulElement.lastElementChild;
    lastChilds.style.backgroundColor = "lightgreen"
})

// --------- NextElementSibling ---------
const apple = document.getElementById("apple");
const nextSibling = apple.nextElementSibling;

nextSibling.style.backgroundColor = "orange";

ulElements.forEach(ulElement => {
    const nextSiblings = ulElement.nextElementSibling;
    nextSiblings.style.backgroundColor = "orange";
})

// --------- PreviousElementSibling ---------
const onion = document.getElementById("onions");
const previousSibling = onion.previousElementSibling;

previousSibling.style.backgroundColor = "green";

ulElements.forEach(ulElement => {
    const previousSiblings = ulElement.previousElementSibling;
    previousSiblings.style.backgroundColor = "orange";
})

// --------- ParentElement ---------

parent = apple.parentElement;
parent.style.backgroundColor = "purple"; // zmienia kolor wszystkich elementów posiadających jabłko na fioletowy

// --------- ParentElement ---------

const children = element.children;

console.log(children);

Array.from(children).forEach(child => {
    child.style.backgroundColor = "purple";
});
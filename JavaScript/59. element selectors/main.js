// element selectors = Metody używane do celowania w oraz manipulowania elementami HTMl.
//                     Pozwalają na wybranie jednego lub kilku elementów HTML
//                     z DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT lub NULL
// 2. document.getElementsClassName()   // KOLEKCJA HTML
// 3. document.getElementsByTagName()   // KOLEKCJA HTML
// 4. document.querySelector()          // FIRST ELEMENT LUB NULL
// 5. document.querySelectorAll()       // NODELIST

// 1. document.getElementById()
const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// 2. document.getElementsClassName()
const fruits = document.getElementsByClassName("fruits");

//fruits[0].style.backgroundColor = "yellow";

for (let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

// fruits.forEach() // wyrzuci error, mimo że można po nim iterować
// dlatego próbujemy to oszukać

// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor = "yellow"
// });

// 3. document.getElementsByTagName()

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "yellow";
// h4Elements[1].style.backgroundColor = "yellow";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

// 4. document.querySelector()

const element = document.querySelector(".fruits"); // bierze pierwszy element czyli Apple

element.style.backgroundColor = "yellow";

// 5. document.querySelectorAll()

const foods = document.querySelectorAll(".fruits");

console.log(foods); // wyświetla poszczególne elementy należące do klasy fruits
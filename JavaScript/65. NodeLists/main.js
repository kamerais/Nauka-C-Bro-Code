// NodeList = Statyczna kolekcja elementów HTML przez (id, klasę, element)
//            Może zostać stworzony poprzez użycie querySelectorAll()
//            Podobne do tablic, ale nie (map, filter, reduce)
//            NodeList nie będzie się update-ować dla automatycznie odzwierciedlonych zmian.

let buttons = document.querySelectorAll(".myButtons");

// DODAWAĆ WŁAŚCIWOŚCI HTML/CSS

// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     buttons.textContent += "🙃";
// });

// CLICK event listener

// buttons.forEach(button =>{
//     button.addEventListener("click",event =>{
//         event.target.style.backgroundColor = "tomato";
//     });
// });

// MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button =>{
//     button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor = "tomato";
//     });

//     button.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "blue";
//     });
// });

// DODAWAĆ ELEMENT

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// USUWAĆ ELEMENT
// buttons.forEach(button =>{
//     button.addEventListener("click",event =>{
//         event.target.remove();
//     });
// });
// classList = Własność elementu w JS używany do interakcji
//             z elementem z listy klas (CSS classes)
//             Pozwala na zrobienie reużywalnych klas dla wielu elementów
//             przez twoją stronę internetową

// add()
// remove()
// toggle(usuń jeżeli istnieje, dodaj jeżeli nie)
// replace(staraKlasa, nowaKlasa)
// contains()

const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event =>{
//     event.target.classList.toggle("hover"); // lub .add("hover")
// });

// myButton.addEventListener("mouseout", event =>{
//     event.target.classList.toggle("hover"); // lub .remove("hover")
// });

myButton.classList.add("enabled");

myButton.addEventListener("click", event =>{
    
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "👹";
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }
    
});

// Podobne przykłady dla <h1>,<h2>,...,<button> itd.
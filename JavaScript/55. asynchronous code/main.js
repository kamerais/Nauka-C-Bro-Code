// synchronous = Wykonuje konsekwentnie linijka po linijce w sposób sekwencyjny
//               Kod, który aż operacja się skończy

// asynchronous = Pozwala na zwielokrotnienie operacji, aby wykonywały się jednocześnie bez czekania
//                Nie blokuje płynności wykonywania i pozwala programowi kontynuować
//                (operacje I/O,  wymagania sieciowe, dostawanie danych)
//                Obsługiwane przez: Callbacks, Promises, Async/Await

// Przykład kodu asynchronicznego

// setTimeout(() => console.log("Task 1"), 3000);

// Przykład kodu synchronicznego
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// Wyświetlanie Task 2, Task 3, Task 4 wykona się pierwsze, a Task 1 będzie na końcu

// Przykład obsługi asynchronicznego kodu

function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);

// Teraz kod wykonuje się poprawnie i Task 1 jest pierwszy, a nie ostatni
// closure = Funkcja zdefiniowana wewnątrz innej funkcji,
//           wewnętrzna funkcja ma dostęp do zmiennych
//           i zakresu zewnętrznej funkcji
//           Pozwala na prywatne zmienne i utrzymanie stanu
//           używanego często w JS frameworkach: React, Vue, Angular

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

// nawet jak spróbuję zmienić wartość zmiennej "message" to dalej będzie ona taka sama

// message = "Goodbye";

// outer();



// nie ważne ile razy ja użyję tej funkcji ona zawsze będzie pokazywać
// output: Count increased to 1
// jak zmienię count = 1000 to mogę to zrobić
// output: Count increased to 1000

// natomiast jak zrobię to w funckji, będzie ona zmieniać swój stan

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }
    return {increment, getCount};
}

const counter = createCounter();

// teraz ile razy wywołam increment, tyle będzie mieć licznik
counter.increment(); // output: Count increased to 1
counter.increment(); // output: Count increased to 2
counter.increment(); // output: Count increased to 3

console.log(`Obecny stan licznika to: ${counter.getCount()}`)
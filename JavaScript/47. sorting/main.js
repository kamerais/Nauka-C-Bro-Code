// sort() = metoda używana do sortowania elementów tablicy w odpowiednim porządku
//          Sortuje elementy jako stringi w porządku leksykograficznym, nie alfabetycznym
//          leksykograficzny = (alfabet + numerki + symbole) jako string


let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

// przed sortowaniem
console.log(fruits);
console.log(numbers);
console.log(people);

// sortuje
fruits.sort();
numbers.sort((a,b) => a - b);

// stosujemy funkcję w funkcji sort, ponieważ po wyświetleniu nie dostajemy tego co chcemy
// output: [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] (NIE [1,2,3,...,10])

// po sortowaniu
console.log(fruits); // output: ['apple', 'banana', 'coconut', 'orange', 'pineapple']
console.log(numbers); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// posortuję listę people na 3 sposoby

// sortowanie przez wiek
people.sort((a,b) => a.age - b.age); // b.age - a.age dałoby listę od najstarszego do najmłodszego

// po sortowaniu przez wiek
console.log(people); // output: [{name: 'Sandy',...}, {name: 'Spongebob',...}, {name: 'Patrick',...}, {name: 'Squidward'}]

// sortowanie przez imie

people.sort((a,b) => a.name.localeCompare(b.name)); // metoda localeCompare jest potrzebna do leksykograficznego porównania stringów

console.log(people); // output: [{name: 'Patrick',...}, {name: 'Sandy',...}, {name: 'Spongebob',...}, {name: 'Squidward'}]

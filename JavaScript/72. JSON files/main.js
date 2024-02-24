// JSON = (JavaScript Object Notation) format wymiany danych
//        Używany do wymiany danych między serwerem, a aplikacją webową
//        Pliki JSON {key:value} lub {value1, value2, value3}

//        JSON.stringify() = konwertuje obiekt JS na JSON string
//        JSON.parse() = konwertuje JSON string na obiekt JS

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {"name": "Spongebob", "age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]};
const people = [{"name": "Spongebob", "age": 30,"isEmployed": true},
                {"name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidward","age": 50,"isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}];

// const jsonString = JSON.stringify(names); // zamienia na tekst

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30,"isEmployed": true},
                {"name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidward","age": 50,"isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}]`;

const parseData = JSON.parse(jsonPeople);

// Dodatkowo jak wydobyć dane z JSONa

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error));

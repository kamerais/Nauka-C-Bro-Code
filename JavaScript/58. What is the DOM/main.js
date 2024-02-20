// DOM = Document Object Model
//       Object(), który reprezentuje strone, którą widzisz w przeglądarce internetowej
//       i dostarcza ci API do interaktowania z nim.
//       Przeglądarka internetowa konstruuje DOM kiedy ładuje dokument HTML
//       oraz strukturyzuje wszystle elementy w ala drzewie reprezentacji.
//       JavaScript może korzystać z DOM do dynamicznego
//       zmiania zawartości, struktury i stylu na stronie internetowej

console.dir(document); // wyświela wszystkie metody obiektu document

// mogę zmienić tytuł mojej strony

document.title = "My website";

// bez korzystania z CSSa mogę zmienić wygląd mojej strony

document.body.style.backgroundColor = "hsl(0,0%,15%)"; // zmienia kolor tła na czarny

// mogę dodać wartość dla wyświetlanej wartości
const username = "kamerais";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username;


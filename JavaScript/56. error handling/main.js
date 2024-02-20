// Error = Jest to obiekt stworzony do reprezentacji problemu, który wystąpił.
//         Występuje często przy User Input lub ustaleniu połączenia

// try { } = Zamyka kod tam, gdzie może wystąpić error
// catch { } = Łapie i obsługuje jakikolwiek error z try { }
// finally { } = (opcjonalne) Zawsze wykonywany. Używany głównie do czyszczenia.
//               np. zamykanie plików, zamykanie połączenia, zwalnianie zasobów


// Przykłady błędów

console.log(x); // output: Uncaught ReferenceError: x is not defined

console.lag("Hello"); // output: Uncaught TypeError: console.lag is not a function
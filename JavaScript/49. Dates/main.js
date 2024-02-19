// Date objects = Obiekty ,które zawierają wartości reprezentujące daty i czasy.
//                Te obiekty daty mogą być zmieniane i formatowane

// Date(year, month, day, hour, minute, second, ms)
const date = new Date();

console.log(date); // output: Sat Feb 17 2024 17:17:45 GMT+0100 (czas środkowoeuropejski standardowy)

// mogę stworzyć własną datę

const date1 = new Date(2024, 0, 1, 2, 3, 4 ,5);

console.log(date1); // output: Mon Jan 01 2024 02:03:04 GMT+0100 (czas środkowoeuropejski standardowy)

// moge ją zapisać jeszcze inaczej

const date2 = new Date("2024-01-02T12:00:00Z");

console.log(date2); // output: Tue Jan 02 2024 13:00:00 GMT+0100 (czas środkowoeuropejski standardowy)

const date3 = new Date(0); // pokazuje datę od 0 milisekund

// mogę uzyskać rok, miesiąc, dzień itp

const date4 = new Date();

const year = date4.getFullYear();
const month = date4.getMonth();
const day = date4.getDay();
const hours = date4.getHours();
const minutes = date4.getMinutes();
const seconds = date4.getSeconds();

console.log(`Losowo zrobiona data ${day}/${month}/${hours}/${minutes}/${seconds}/${year}`)
// ES6 Module = Zewnętrzny plik posiadający reużywalny kod
//              który może być zainportowany wewnątrzn innego pliku JavaScript.
//              Można pisać reużywalny kod dla wielu różnych aplikacji
//              Może zawierać zmienne, klasy, funkcje ... i wiele innych.
//              Wprowadzony wraz z aktualizacją ECMAScript 2015

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);

console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);

console.log(`${area.toFixed(2)}cm^2`);

const volume = getVolume(10);

console.log(`${volume.toFixed(2)}cm^3`);
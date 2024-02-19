// setTimeout() = funkcja w JavaScripcie, która pozwala na zaplanowanie
//                wykonania funkcji po danej ilości czasu (milisekundy)
//                Czasy są przybliżane (w zależności zależą od workload czasu uruchamiania środowiska JavaScript)

//                setTimeout(callback, delay);

setTimeout(() => console.log("Ta wiadomość wyświetli się po 5 sekundach"), 5000);

function countDown(){
    setTimeout(() => {console.log("3")}, 1000);
    setTimeout(() => {console.log("2")}, 2000);
    setTimeout(() => {console.log("1")}, 3000);
    setTimeout(() => {console.log("Happy New Year")}, 4000);
}

countDown();
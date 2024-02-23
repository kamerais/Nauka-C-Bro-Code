// Callback Hell = Sytuacja w JS gdzie callback-i
//                 są zagnieżdzone wewnątrz innych callback-ów do takiego
//                 stopnia gdzie kod jest trudny do czytania
//                 Stary schemat do radzenia sobie z funkcjami asynchronicznymi
//                 Używaj z obietnic + async/await aby uniknąć callback hell

function task1(callback){
    setTimeout(() =>{
        console.log("Task 1 complete");
        callback()
    }, 2000);
    
}
function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 complete");
        callback()
    }, 1000);
}
function task3(callback){
    setTimeout(() =>{
        console.log("Task 3 complete");
        callback()
    }, 3000);
}
function task4(callback){
    setTimeout(() =>{
        console.log("Task 4 complete");
        callback()
    }, 1500);
}

task1(() =>{
    task2(() =>{
        task3(() =>{
            task4(() => console.log("All task complete"));
        });
    });
});

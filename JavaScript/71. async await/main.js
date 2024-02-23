// Async/Await = Async = tworzy funkcję, która zwraca obietnicę
//               Await = tworzy asynchroniczną funkcję, która oczekuje na obietnicę

//               Pozwala na napisanie asynchronicznego kodu w sposób synchroniczny
//               Async nie posiada parametrów zatwierdzenia lub odrzucenia
//               Wszystkie po Await jest umieszczone w kolejce zdarzeń

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dogWalked = true;
            if(dogWalked){
                resolve("You walked the dog");
            }
            else{
                reject("You didn't walk the dog");
            }
            
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
            
        }, 2500);
    });
    
}

function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const TrashTakenOut = true;
            if(TrashTakenOut){
                resolve("You take out the trash");
            }
            else{
                reject("You didn't take out the trash");
            }
            
        }, 500);
    });
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log(`You finished all the chores!`);
    }
    catch(error){
        console.error(error);
    }
    
}

doChores();
// Promise = Obiekt, który zarządza asynchronicznymi operacjami.
//           Zawija Obiekt Obietnicy wokół {asynchronicznego kodu}
//           "Obiecuję zwrócić wartość"
//           OCZEKIWANIE -> ZATWIERDZONE lub ODRZUCONE
//           new Promise((zatwierdzone, odrzucone) => {asynchroniczny kod})

// ZRÓB TE CZYNNOŚCI W KOLEJNOŚĆI

// 1. Wyjdź na spacer z psem
// 2. Posprzątaj kuchnie
// 3. Wynieś śmieci

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

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("All task completed")})
         .catch(error => console.error(error));

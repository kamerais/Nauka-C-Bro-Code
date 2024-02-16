#include <stdio.h>
#include <string.h> // korzstam z biblioteki string, bo potrzebuję metody do usunięcia nowej linii przy fgets

int main(){
    
    int age;
    char name[25]; // 25 bitów

    printf("What is your name? ");
    //scanf("%s", &name); // & = wskazuje na adres w pamięci
    fgets(name, 25, stdin); // korzystamy z fget, jeżeli w inpucie mają występować spacje
    name[strlen(name)-1] = '\0'; // to jest po to, aby usunąć nową linię przy korzystanoi z fgets
    
    printf("How old are you? ");
    scanf("%d",&age);

    printf("Hello %s, how are you?\n", name);
    printf("You are %d years old", age);
    return 0;
}
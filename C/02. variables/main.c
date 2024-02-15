#include <stdio.h>

int main(){
    // variable = Zalokowane miejsce w pamięci do przechowywania wartości/
    //            Odwołujemy się do nazwy zmiennej, aby uzyskać jej wartość
    //            Zmienna ta zachowuje się teraz jak jej zmienna, którą przechowuje
    //            ALE musimy zadeklarować jaki typ danych ta zmienna przechowuje

    int x; // deklaracja
    x = 123; // inicjalizacja
    int y = 321; // deklaracja i inicjalizacja

    int age = 21;        // Liczba całkowita
    float gpa = 2.05;    // liczba zmiennoprzecinkowa
    char grade = 'C';    // Pojedyńczy znak (to ważnej, że jest '', a nie "")
    char name[] = "Bro"; // ciąg znaków

    printf("Hello %s\n", name);
    printf("You are %d years old\n", age);
    printf("Your average grade is %c\n",grade);
    printf("Your gpa is %0.2f", gpa);
    return 0;
}
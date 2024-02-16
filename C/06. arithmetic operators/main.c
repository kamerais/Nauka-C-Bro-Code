#include <stdio.h>

int main(){
    
    // operatory arytmetyczne

    // + (dodawanie)
    // - (odejmowanie)
    // * (mnożenie)
    // / (dzielenie)
    // % (module) [działania module to otrzymywanie reszty z dzielenia]
    // ++ inkrementacja (dodawanie o 1)
    // -- deinkrementacja (odejmowanie o 1)

    int x = 5;
    int y = 2;
    
    int suma = x + y; // suma = 7
    int mnozenie = x * y; // mnożenie = 10
    float dzielenie =  x / (float) y; // dzielenie = 2.5

    // w dzieleniu trzeba pamiętać, że dzielenie liczb całkowitych daje liczbę całkowitą, a dzielenie przez zmiennoprzecinkową
    // daje liczbę zmiennoprzecinkową, dlatego dzielnik konwertuje z int na float.
    
    int modulo = x % y; // reszta z dzielenia 5 przez 2 = 5 % 2 = 1

    printf("Suma: %d\n",suma); // output: 7
    printf("Mnożenie: %d\n",mnozenie); // output: 10
    printf("Dzielenie: %0.1f\n",dzielenie); // output: 2.5
    printf("Reszta z dzielenia: %d\n",modulo); // output: 1

    // są dwa sposoby dodania jedynki do zmiennej
    x += 1; // lub x = x + 1
    printf("x = %d\n",x); // output: 6
    // alternatywnie
    x++;
    printf("x = %d\n",x); // output: 7
    
    // mogę też odejmować na dwa sposoby
    x -= 1; // lub x = x - 1
    printf("x = %d\n",x); // output: 6
    
    //alternatywnie
    x--;
    printf("x = %d\n",x); // output: 5
    return 0;
}
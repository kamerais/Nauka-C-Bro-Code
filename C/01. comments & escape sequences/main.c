#include <stdio.h>

int main(){
    
    // To jest komentarz jednolinijkowy
    /*
        To
        jest
        komentarz
        wielolinijkowy
    */
    /*
        escape sequences (sekwencje wyjścia) = kombinacja znaków zawierających backslash \
                                               po którym jest literka lub kombinacja cyfr.
                                               Specyfikują akcje wewnątrz linijki lub stringu tekstu
                                               \n = nowa linia (newline)
                                               \t = wstaw tabulator (taby)
                                               \\ = wyświetla \
                                               \' = wyświetla '
                                               \"" = wyświetla ""
    */

    printf("1\t2\t3\n4\t5\t6\n7\t8\t9");
    printf("\"I like Pizza\"- Abraham Lincoln probably");
    return 0;
}
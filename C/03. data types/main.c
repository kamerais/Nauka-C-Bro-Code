#include <stdio.h>
#include <stdbool.h>
int main(){
    
    char a = 'C'; // pojedyńczy znak %C
    char b = "Bro"; // lista znaków %sekwencje

    float c = 3.131592; // 4 bity (32 bitowa precyzja) 6-7 cyfr %f
    double c = 3.131592653589793; // 8 bity (64 bitowa precyzja) 15-16 cyfr %lf

    bool e = true;               // 1 bit (prawda lub fałsz) %d
    char f = 100;                // 1 bit (od -128 do +127) %d lub %c
    unsigned char g = 255;       // 1 bit (od 0 do +255) %d lub %c

    short int h = 32767l;        // 2 bit (-32,768 do +32,767) %d
    unsigned short int i = 65535; // 2 bity (od 0 do +65,535) %d

    int j = 2147483647; // 4 bity (od -2,147,483,648 do +-2,147,483,647) %d
    unsigned int k = 4294967295L; // 4 bity (od 0 do +4,294,967,295) %u

    long long int l = 9223372036854775807; // 8 bitów (od -9 kwintylion do +9 kwintylion) %lld
    unsigned long long int m = 1844674407370955161; // 8 bitów (od 0 do +18 kwintylion) %llu

    return 0;
}
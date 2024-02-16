#include <stdio.h>

int main(){
    
    // constant (stała) = jest to po prostu wartość, której nie można zamienić podczas wykonywania programu

    float pi = 3.14159;

    printf("pi = %f\n",pi); // output: 3.14159

    // mogę przypadkiem nadpisać zmienną pi
    pi = 31.4159;

    printf("pi = %f (po nadpisaniu)\n",pi); // output: 31.4159

    const float PI = 3.14159;

    printf("PI = %f\n", PI); // output: 3.14159

    // spróbuję nadpisać PI

    //PI = 31.4159; nie można nadpisać wyskakuje błąd


    return 0;
}
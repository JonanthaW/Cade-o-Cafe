#include <iostream>
#include <locale>
#include <math.h>
using namespace std;

int main()
    {
    setlocale(LC_ALL,"Portuguese");
        int Numero;
        cout << "Cubo e quadrado de um número\nDigite um número: ";
        cin >> Numero;
        cout <<" O quadrado de "<< Numero <<" é "<< pow(Numero, 2) <<" e o Cubo de "<< Numero <<" é "<< pow(Numero, 3);
        return 0;
    }

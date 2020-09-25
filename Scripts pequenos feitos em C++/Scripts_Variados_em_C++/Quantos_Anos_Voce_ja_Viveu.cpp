#include <iostream>
#include <locale>
#include <math.h>
using namespace std;

int main()
    {
    setlocale(LC_ALL,"Portuguese");
        int Dias;
        cout << "Quantos dias você já viveu? ";
        cin >> Dias;
        cout << "Você já viveu " << Dias/365 <<"ano(s)";
        cout << endl;
        return 0;
    }

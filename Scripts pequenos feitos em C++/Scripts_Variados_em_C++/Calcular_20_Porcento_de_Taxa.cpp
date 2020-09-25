#include <iostream>
#include <locale>
#include <math.h>
using namespace std;

int main()
    {
    setlocale(LC_ALL,"Portuguese");
        float Produto;
        cin >> Produto;
        Produto += Produto *20/100;
        cout << "O produto valerá " << Produto;
        return 0;
    }

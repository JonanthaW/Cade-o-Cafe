#include <iostream>
#include <iomanip>
using namespace std;

int main(){
    int continuar=1;
    while(1){
        if(continuar==1){
            float NotaX,NotaY,X,Y;
            int acceptX=0, acceptY=0;
            while(acceptX!=1){
                cin >> NotaX;
                if(NotaX >= 0.0 && NotaX <= 10.0){
                    X=NotaX;
                    acceptX=1;
                }else{
                    cout << "nota invalida" << endl;
                }
                }
            while(acceptY!=1){
                cin >> NotaY;
                if(NotaY >= 0.0 && NotaY <= 10.0){
                    Y=NotaY;
                    acceptY=1;
                }else{
                    cout << "nota invalida" << endl;
                }
            }
            cout <<fixed <<setprecision(2) << "media = " << (X+Y)/2 << endl;
            }
        cout << "novo calculo (1-sim 2-nao)" << endl;
        cin >> continuar;
        if(continuar==2){
            break;
        }
        }
    return 0;
}

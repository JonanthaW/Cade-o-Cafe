#include <iostream>
using namespace std;

int main(){
    int N;
    int T = 0;
    cin >> N;
    while(T <=100){
        cout << N <<" * " << T << " = " << N*T << endl;
        T++;
    }
    return 0;
}

#include <iostream>
#include <stdlib.h>
#include <string>
using namespace std;

void roleta();


int main(){
    roleta();
    return 0;
}

void roleta(){
    int quantia;
    cout << "quantos jogarão?\nResposta: ";
    cin >> quantia;
    int restantes = quantia;
    int jogadores[quantia];
    for(int i=1; i<=sizeof(jogadores)/sizeof(jogadores[0]); i++){
        jogadores[i] = i;
    }
    cout <<"\t\t\t"<< quantia << " Jogadores escolhidos."<< endl;
    srand(time(NULL));

    while(restantes>1){
        int buraco = rand() % quantia + 1;
        string atirar;
        cout << endl;
        cout << "Puxar gatilho? [S/N]\nResposta: ";
        cin >> atirar;
        if(atirar=="S" || atirar=="s"){
                for(int q=1;q<=quantia;q++){
                            if(jogadores[q]==buraco){
                                    jogadores[q] -= buraco;
                                    restantes--;
                                }
                                }
                                system("clear");
                                cout <<"\t\t\tJogador "<< buraco << " morreu;" << endl;
                cout << R"(
                            CLICK
                             | |
                           @#####@
                         (###   ###)-.
                       )";
                       cout << ".(###  "<< buraco;
                       cout << R"(   ###) \
                      /  (###   ###)   |
                     (=-  .@#####@|_--"
                     /\    \_|l|_/ (\
                    (=-\     |l|    /
                     \  \.___|l|___/
                     /\      |_|   /
                    (=-\._________/\
                     \             /
                       \._________/
                         #   __   #
                         \########/")" << endl;
                         cout << endl;
                         cout << "\tRestantes: \n";
                         cout << "\t\t\t";

                         for(int q=1;q<=quantia;q++){
                            cout << jogadores[q] << "  ";
                                }
                        cout << endl;
        }
        }
    }

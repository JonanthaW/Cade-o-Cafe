#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>
using namespace std;

int pontosjogador=0, pontosinimigo=0;

string escolhainimigo(){
    srand(time(0));
    const string escolha[3] = {"Pedra", "Papel", "Tesoura"};
    string computador = escolha[rand() % 3];
    return computador;
}

string escolhaPlayer(){
    string escolhajogador;
    string vencedor;
    cout << "Você escolhe: ";
    cin >> escolhajogador;
    cout << endl;

    if (escolhajogador == "Pedra" || escolhajogador == "PEDRA" || escolhajogador == "pedra"){
        if(escolhainimigo() == "Tesoura"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tJogador venceu a rodada!!!" << endl;
            pontosjogador++;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
        }else if(escolhainimigo()=="Papel"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tComputador venceu a rodada!!!" << endl;
            pontosinimigo++;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
        }else if(escolhainimigo()=="Pedra"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tEMPATE!!!!" << endl;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
    }
    }
    else if (escolhajogador == "Papel" || escolhajogador == "PAPEL" || escolhajogador == "papel"){
        if(escolhainimigo() == "Pedra"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tJogador venceu a rodada!!!" << endl;
            pontosjogador++;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
        }else if(escolhainimigo()=="Tesoura"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tComputador venceu a rodada!!!" << endl;
            pontosinimigo++;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
        }else if(escolhainimigo()=="Papel"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tEMPATE!!!!" << endl;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
    }
    }
    else if (escolhajogador == "Tesoura" || escolhajogador == "TESOURA" || escolhajogador == "tesoura"){
        if(escolhainimigo() == "Papel"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tJogador venceu a rodada!!!" << endl;
            pontosjogador++;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
        }else if(escolhainimigo()=="Pedra"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tComputador venceu a rodada!!!" << endl;
            pontosinimigo++;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
        }else if(escolhainimigo()=="Tesoura"){
            cout << "\tComputador escolheu " << escolhainimigo() << endl;
            cout << "\tEMPATE!!!!" << endl;
            cout << "\tJogador tem " << pontosjogador << " ponto(s)," << " Computador tem " << pontosinimigo << " ponto(s)" <<endl;
    }
    }
    else{
        cout << "Opção inválida, escolha novamente.\n" << endl;
        escolhaPlayer();
    }


    return escolhajogador;
}
int main(){
    cout << "\033[33m\t\t\t    JOKENPO EM C++" << "\n\n\t\t\tPedra, Papel ou Tesoura?\033[m" << endl;
    while(pontosinimigo < 3 && pontosjogador < 3){
        cout << endl;
        escolhaPlayer();
        if(pontosjogador >=3){
            cout << "\033[32m\n\t\tParabêns Jogador!!!\033[m" << endl;
        }
        else if(pontosinimigo >=3) {
            cout << "\033[32m\n\t\tO computador te derrotou!!!\033[m" << endl;
        }
    }
    return 0;
}

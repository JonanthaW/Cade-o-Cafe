#include <iostream>
#include <string>
#include <locale>

using namespace std;
int vidas = 5;

int main(){
    setlocale(LC_ALL, "Portuguese");
    // letra pra adivinhação e contador de vidas iniciado.
    char letra;

    // Frase de início.
    cout << "\t\t\t\t #JOGODAFORCA\n\t\t\033[33mDescubra quais são as palavras ocultas antes que \n\t\to bonequinho fique com a corda no pescoço\033[m" << endl;
    cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |     / \"
                          " |           |    /   \"
                          " |           |   *     *"
                          " |___________|"
                                                        )" << endl;
    cout << "Sua palavra é: " << endl;
    cout << "\t\t\t\t";

    // Escolhe a palavra e define seu tamanho.
    char palavra[] = {"carro"};
    int tamanho = sizeof(palavra)/sizeof(palavra[0])-1;
    char outra[tamanho] = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // Só são utilizados os "X" necessários, o resto é descartado.
    for(int i=0; i<tamanho; i++){
        cout << outra[i] << "  "; // Printa o total de letras da palavra selecionada;
    }

    //Jogador deverá escrever a letra que ele acha que há na palavra.
    while(vidas!=0){
        cout <<"\n" << endl;
        cout << "Qual letra você acha que é? " << endl;
        cout << "letra: ";
        cin >> letra;
        cout << endl;

        bool existe = false; // Se a variável "existe" for pra verdadeiro, essa letra existe na palavra.
        for(int k=0;k<tamanho;k++){
            if(palavra[k]==letra){ // Troca-se o "X" pela letra certa.
                outra[k] = palavra[k];
                    existe = true;
                }
                }

            if(existe==true){
                cout << "\t\t\t  Existe a letra \033[32m" << letra << "\033[m nesta palavra\n\n\n" << "\t\t\t\t  ";
                for(int i=0; i<tamanho; i++){
                    cout << outra[i] << "  "; existe = false;
                    }

                switch(vidas){
                    case 5:
                        cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |     / \"
                          " |           |    /   \"
                          " |           |   *     *"
                          " |___________|"
                                                        )" << endl;
                                                        break;
                    case 3:
                        cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |       \"
                          " |           |        \"
                          " |           |         *"
                          " |___________|"
                                                        )" << endl;
                          break;
                    case 2:
                         cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |"
                          " |           |"
                          " |           |"
                          " |___________|"
                                                        )" << endl;
                          break;
                    case 1:
                     cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|             |\"
                                "|             | \"
                           " ____|_____        | *"
                          " |           |"
                          " |           |"
                          " |           |"
                          " |___________|"
                                                        )" << endl;
                          break;
                    case 0:
                     cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|             |"
                                "|             |"
                           " ____|_____        |"
                          " |           |"
                          " |           |"
                          " |           |"
                          " |___________|"
                                                        )" << endl;
                          break;
                    }
                }
                // Testes para caso a letra não exista na palavra.
            else{
                cout << "\t\t\tNão existe letra \033[31m" << letra << "\033[m nesta palavra\n" << endl;
                vidas-=1;
            cout << "\n\t\t\t\t  ";
                for(int i=0; i<tamanho; i++){
                    cout << outra[i] << "  "; existe = false;
                    }
                }
                switch(vidas){
                    case 4:
                        cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |     / \"
                          " |           |    /   \"
                          " |           |   *     *"
                          " |___________|"
                                                        )" << endl;
                                                        break;
                    case 3:
                        cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |       \"
                          " |           |        \"
                          " |           |         *"
                          " |___________|"
                                                        )" << endl;
                          break;
                    case 2:
                         cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |"
                          " |           |"
                          " |           |"
                          " |___________|"
                                                        )" << endl;
                          break;
                    case 1:
                     cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|             |\"
                                "|             | \"
                           " ____|_____        | *"
                          " |           |"
                          " |           |"
                          " |           |"
                          " |___________|"
                                                        )" << endl;
                          break;
                    case 0:
                     cout << R"(
                                " ______________"
                                "|             |"
                                "|             |"
                                "|           __|__"
                                "|          | + + |"
                                "|          |__-__|"
                                "|             |"
                                "|             |"
                                "|             |"
                           " ____|_____        |"
                          " |           |"
                          " |           |"
                          " |           |"
                          " |___________|"
                                                        )" << endl;
                          break;
                    }
                if(vidas==1){
                    cout << "\t\t\t\033[33mVocê só tem mais " << vidas << " tentativa\033[m" << endl;
                    }
                else if(vidas==0){
                    cout << "\033[31m\t\t\t\tACABOU, GAME OVER!!!\033[m" << endl;
                    }
                else{
                    cout << "\t\t\t\033[33mVocê só tem mais " << vidas << " tentativas\033[m" << endl;
                    }
            }
    return 0;
}

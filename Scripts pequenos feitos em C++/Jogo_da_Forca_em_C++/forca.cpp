#include <iostream> // cout; cin;
#include <locale>  // setlocale;
#include <cstring> // chrstr; strcpy;
#include <stdlib.h> // srand; rand;
#include <cctype> // toupper;

using namespace std;

void game();
void opc();

int main(){
    opc();
    string iniciar;
    // Pergunta se o jogador quer jogar ou não;
    while(1){
        cout << "Deseja jogar? (S/N)";
        cout << "\nEscolha: ";
        cin >> iniciar;

        if(iniciar=="S" || iniciar == "s"){
            cout << endl;
            game();
        }
        else if(iniciar=="N" || iniciar == "n"){
            cout << "\033[33m\t\t\t\tSaindo do jogo...\033[32m\n\t\t\t\t Tchau, Tchau!!\033[m" << endl;
            break;
        }
        else{
            cout << "\n\033[33m\t\t\t\tCaractére inválido.\n\33[m" << endl;
        }
    }
    return 0;
}

void game(){

    // Vidas do jogador e quantas letras ele já adivinhou;
    int vidas = 5;
    int acertos = 0;
    setlocale(LC_ALL, "Portuguese");

    // letra pra adivinhação e contador de vidas iniciado;
    char letra;

    cout << "A palavra escolhida é: " << endl;
    cout << "\t\t\t\t";

    // Escolhe a palavra aleatóriamente e define seu tamanho;
    string palavras[] = {"QUEIJO","BOLA","GATO","UNIFORME","PEIXE","GARFO","CARRO","MOTO","HOJE","MULHER","ESCOLHA","ESCOVA","CELULAR"};
    srand(time(NULL));
    int random = rand() % sizeof(palavras)/sizeof(palavras[0])-1;
    string escolhida = palavras[random];

    // Transforma de string para char;
    char palavra[escolhida.size() +1];
    strcpy(palavra, escolhida.c_str());
    int tamanho = sizeof(palavra)/sizeof(palavra[0])-1;

    // Palavra secundária que servirá para marcar os "X" que serão adivinhados;
    string outra[tamanho];
    string xizes = "X"; // Completa os espaços do vetor com a quantia de "X" necessária;
    for(int m=0; m<tamanho;m++){
        outra[m] = xizes;
        }

    for(int i=0; i<tamanho; i++){
        cout << outra[i] << "  "; // Printa o total de letras da palavra selecionada;
        }

    /* Inicio do módulo principal do jogo, enquanto a vida do jogador não chegar à 0, ele deverá
     escrever uma letra; */
    while(vidas!=0){
        cout <<"\n" << endl;
        cout << "Qual letra você acha que é? " << endl;
        cout << "letra: ";
        cin >> letra;
        letra = toupper(letra);
        cout << endl;

        bool existe = false; // Se a variável "existe" for pra verdadeiro, essa letra existe na palavra;
        for(int k=0;k<tamanho;k++){
            if(palavra[k]==letra){ // Troca-se o "X" pela letra correspondente;
                outra[k] = letra;
                    acertos+=1;
                    existe = true; // variável setada para verdadeiro;
                }
            }

        // Caso o número de acertos seja igual ao número de letras da palavra, o jogo é encerrado com vitória do jogador;
        if(acertos==tamanho){
            system("clear");
            cout << "\t\t\t\033[32m   A palavra era " << palavra <<".\033[m";
            cout << R"(
                 ___   __   ___    __   ___  ___  _  _  ___
                (  ,\ (  ) (  ,)  (  ) (  ,)(  _)( \( )/ __)
                 ) _/ /__\  )  \  /__\  ) ,\ ) _) )  ( \__ \
                (_)  (_)(_)(_)\_)(_)(_)(___/(___)(_)\_)(___/
                _  _   __    __  ___    _  _  ___  _  _   __  ___  _  _
               ( )( ) /  \  / _)(  _)  ( )( )(  _)( \( ) / _)(  _)( )( )
                \\// ( () )( (_  ) _)   \\//  ) _) )  ( ( (_  ) _) )()(
                (__)  \__/  \__)(___)   (__) (___)(_)\_) \__)(___) \__/   )" << endl;
                                                                                cout << endl;
                                                                                break;
            }

        // outputs ligados à letra existente;
        if(existe==true){
            cout << "\t\t\t  Existe a letra \033[32m" << letra << "\033[m nesta palavra\n\n\n" << "\t\t\t\t";
            for(int i=0; i<tamanho; i++){
                cout << outra[i] << "  "; existe = false;
                }

            // Bonecos em ASCII ART, representando graficamente o jogador caso a letra exista na palavra;
            switch(vidas){
                case 5:
                    cout << R"(
                             ______________
                            |             |
                            |            z|z
                            |          zzz|zzz
                            |         z| O O |z
                            |        zz|__-__|zz
                            |         z   |   z
                            |            /|\
                            |           / | \
                        ____|_____     *  |  *
                       |           |     / \
                       |           |    /   \
                       |           |   *     *
                       |___________|
                                                    )" << endl;
                                                    break;
                case 4:
                    cout << R"(
                             ______________
                            |             |
                            |             |
                            |           __|__
                            |          | O O |
                            |          |__-__|
                            |             |
                            |            /|\
                            |           / | \
                        ____|_____     *  | *
                       |           |     / \
                       |           |    /   \
                       |           |   *     *
                       |___________|
                                                    )" << endl;
                                                    break;
                case 3:
                    cout << R"(
                             ______________
                            |             |
                            |             |
                            |           __|__
                            |          | 0 0 |
                            |          |__-__|
                            |             |
                            |            /|\
                            |           / | \
                        ____|_____     *  | *
                       |           |       \
                       |           |        \
                       |           |         *
                       |___________|
                                                    )" << endl;
                                                    break;
                case 2:
                     cout << R"(
                             ______________
                            |             |
                            |             |
                            |           __|__
                            |          | 0 0 |
                            |          |__-__|
                            |             |
                            |            /|\
                            |           / | \
                        ____|_____     *  |  *
                       |           |
                       |           |
                       |           |
                       |___________|
                                                    )" << endl;
                                                    break;
                case 1:
                 cout << R"(
                             ______________
                            |             |
                            |             |
                            |           __|__
                            |          | - - |
                            |          |__-__|
                            |             |
                            |             |\
                            |             | \
                        ____|_____        |  *
                       |           |
                       |           |
                       |           |
                       |___________|
                                                    )" << endl;
                                                    break;
                case 0:
                 cout << R"(
                             ______________
                            |             |
                            |             |
                            |           __|__
                            |          | X X |
                            |          |__-__|
                            |             |
                            |             |
                            |             |
                        ____|_____        |
                       |           |
                       |           |
                       |           |
                       |___________|
                                                    )" << endl;
                                                    break;
                }
            }

                // outputs ligados à não-existencia da letra;
            else{
                cout << "\t\t\tNão existe letra \033[31m" << letra << "\033[m nesta palavra\n" << endl;
                vidas-=1;
                cout << "\n\t\t\t\t  ";
                for(int i=0; i<tamanho; i++){
                    cout << outra[i] << "  "; existe = false;
                    }
                    // Bonecos em ASCII ART, representando graficamente o jogador caso a letra não exista na palavra;
                switch(vidas){
                    case 4:
                        cout << R"(
                                 ______________
                                |             |
                                |             |
                                |           __|__
                                |          | 0 0 |
                                |          |__-__|
                                |             |
                                |            /|\
                                |           / | \
                            ____|_____     *  |  *
                           |           |     / \
                           |           |    /   \
                           |           |   *     *
                           |___________|
                                                        )" << endl;
                                                        break;
                    case 3:
                        cout << R"(
                                 ______________
                                |             |
                                |             |
                                |           __|__
                                |          | 0 0 |
                                |          |__-__|
                                |             |
                                |            /|\
                                |           / | \
                            ____|_____     *  |  *
                           |           |       \
                           |           |        \
                           |           |         *
                           |___________|
                                                        )" << endl;
                                                        break;
                    case 2:
                         cout << R"(
                                 ______________
                                |             |
                                |             |
                                |           __|__
                                |          | 0 0 |
                                |          |__-__|
                                |             |
                                |            /|\
                                |           / | \
                            ____|_____     *  |  *
                           |           |
                           |           |
                           |           |
                           |___________|
                                                        )" << endl;
                                                        break;
                    case 1:
                     cout << R"(
                                 ______________
                                |             |
                                |             |
                                |           __|__
                                |          | - - |
                                |          |__-__|
                                |             |
                                |             |\
                                |             | \
                            ____|_____        |  *
                           |           |
                           |           |
                           |           |
                           |___________|
                                                        )" << endl;
                                                        break;
                    case 0:
                     cout << R"(
                                 ______________
                                |             |
                                |             |
                                |           __|__
                                |          | x X |
                                |          |__-__|
                                |             |
                                |             |
                                |             |
                            ____|_____        |
                           |           |
                           |           |
                           |           |
                           |___________|
                                                        )" << endl;
                                                        break;
                    }
                    }

                if(vidas==1){
                    cout << "\t\t\t\033[33mVocê só tem mais " << vidas << " tentativa\033[m" << endl;
                    }
                else if(vidas==0){
                    cout << "\t\t\t\033[33m      A palavra era " << palavra <<".\033[33m" << endl;
                    cout << "\033[31m\t\t\t      ACABOU, GAME OVER!!!\033[m" << endl;
                            cout << endl;
                            }
                else{
                    cout << "\t\t\t\033[33mVocê só tem mais " << vidas << " tentativas\033[m" << endl;
                    }
            }
}

void opc(){
    // Frase de início.
    cout << "\t\t\t\t #JOGODAFORCA\n\t\t\033[33mDescubra quais são as palavras ocultas antes que \n\t\to bonequinho fique com a corda no pescoço.\033[m" << endl;
    cout << R"(
                                " ______________"
                                "|             |"
                                "|            z|z"
                                "|          zzz|zzz"
                                "|         z| + + |z"
                                "|        zz|__-__|zz"
                                "|         z   |   z"
                                "|            /|\"
                                "|           / | \"
                           " ____|_____     *  | *"
                          " |           |     / \"
                          " |           |    /   \"
                          " |           |   *     *"
                          " |___________|"

                                                    )" << endl;
}


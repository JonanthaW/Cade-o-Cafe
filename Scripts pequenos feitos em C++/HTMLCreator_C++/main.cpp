#include <iostream>
#include <unistd.h>
#include <fstream>

using namespace std;

void createPaste(int quantity);
void createAdditional();

void createPaste(int quantity) {


    if (!chdir("Projeto")) {
        cout << "\t\t\t\033[31mA pasta 'Projeto' já existe!\n\t\t\tCancelando ação!\033[0m" << endl;
    }

    else {
        try {
            for(int i=0; i<quantity; i++) {
                string CreateDirectory = "mkdir Projeto" + to_string(i);
                string ManageDirectory = "Projeto" + to_string(i);
                system(CreateDirectory.c_str());
                chdir(ManageDirectory.c_str());
                createAdditional();
                chdir("..");

            }
        }

        catch(error_code) {
            cout << "Algo deu errado!";
        };

        cout << "\t\t\t\033[32mProjeto(s) criado(s) com sucesso.\033[0m" << endl;
        }
}

void createAdditional()
{
    ofstream file("index.html");
    file << "<!DOCTYPE html>\n<html lang='PT'>\n\t<head>\n\t\t<meta charset='utf-8'>\n\t\t<meta name='viewport' content='width=device-width, initial-scale=1'>\n\t\t<link rel='stylesheet' href='css/master.css'>\n\t\t<title></title>\n\t</head>\n\t<body>\n\t\t<script src='main.js'></script>\n\t</body>\n</html>";
    file.close();

    system("mkdir css");
    chdir("css");
    ofstream css("master.css");
    css << "* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}";
    css.close();

    chdir("..");

    system("mkdir js");
    chdir("js");
    ofstream js("main.js");
    js << "() => {\n}";
    js.close();

    chdir("..");

    system("mkdir img");
}

int main(int argc, char** argv)
{
    int nmb = 0;
    if (argc > 1) {
        nmb = atoi(argv[1]);
    }
    else {
        nmb = 1;
    }
    createPaste(nmb);
    return 0;
}

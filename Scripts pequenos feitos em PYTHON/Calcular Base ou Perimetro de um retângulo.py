print ("\nCalculando a area ou o perimetro de um retangulo")
while "Escolha":

        Escolha = input("Voce quer calcular a Area ou o Perimetro? ")

       
        if Escolha == "Area":
            print ("\nCalculando a area de um retangulo\n Area é igual a Base vezes a altura ou a=b.h\n Caso você queira, use o calculador abaixo")
            base = int(input("Qual a base deste retângulo? "))
            altura = int(input("Qual a altura deste retângulo? "))

            area = base * altura

            print ("\tSeu retangulo tem área de %d cm²\n" % (area))
        



        elif Escolha == "Perimetro":
            print ("\nCalculando o perimetro de um retangulo\n O perimetro é a base somado com a altura multiplicado por dois ou (b+h) * 2\n Caso você queira, use o calculador abaixo")
            base = int(input("Qual a base deste retângulo? "))
            altura = int(input("Qual a altura deste retângulo? "))

            perimetro = (base+altura) * 2

            print ("\tSeu retangulo tem perimetro de %d cm²\n" % (perimetro))
        
        elif Escolha == "Sair":
            print ("Saindo do programa")
            break
        

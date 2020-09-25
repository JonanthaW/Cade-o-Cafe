import random

#Descubra O Numero

print ("\nDescubra o número")
print ("\nHm.... Eu estou pensando em um número entre 1 e 20.")
chances = 5
aleatorio = random.randint(1, 20)
if aleatorio %2 ==0:
    print ("DICA: É UM NÚMERO PAR\n")
else:
    print ("DICA: É UM NÚMERO IMPAR\n")
while chances != 0:
    numero = int(input("Em qual número eu estou pensando? "))
    if numero >= 1 and numero <= 20:
        if numero < aleatorio:
            print ("\nUm pouquinho mais pra cima!!!!")
            print ("Você só tem mais %i chances\n"% (chances))
            chances -= 1
        elif numero > aleatorio:
            print ("\nUm poquinho mais pra baixo!!!!")
            print ("Você só tem mais %i chances\n"% (chances))
            chances -= 1
        elif numero == aleatorio:
            print ("\nNA MOSCA!!")
            break
        elif chances == 0:
            print ("VOCÊ NÃO TEM MAIS CHANCES :(")
            break
    else:
        print ("\n\tÉ ENTRE 1 E 20 !!!!!!!!!\n\t")
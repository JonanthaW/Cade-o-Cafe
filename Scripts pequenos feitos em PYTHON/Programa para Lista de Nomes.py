# Write a program to ask the user for five names. The program should store the
#names in a list, and print them all out at the end

ListaNomes = []

nomes = str(input("Digite 5 nomes: "))
ListaNomes.append (nomes)
nomes = str(input())
ListaNomes.append (nomes)
nomes = str(input())
ListaNomes.append (nomes)
nomes = str(input())
ListaNomes.append (nomes)
nomes = str(input())
ListaNomes.append (nomes)

print ("Os nomes que você escreveu foram: %s" % (ListaNomes))

ListaNomes.sort()
print ("Sorteados: %s "% (ListaNomes))

print ("O terceiro nome que você inseriu foi: %s" % (ListaNomes [3]))

NovoNome = int(input("Você deseja trocar um nome da lista? Qual deles? "))

if NovoNome == 1:
     NovoNome1 = str(input("Novo Nome: "))
     ListaNomes [0] = NovoNome1
     print ("Os nomes agora são %s" % (ListaNomes))

elif NovoNome == 2:
     NovoNome2 = str(input("Novo Nome: "))
     ListaNomes [1] = NovoNome2
     print ("Os nomes agora são %s" % (ListaNomes))
     
elif NovoNome == 3:
     NovoNome3 = str(input("Novo Nome: "))
     ListaNomes [2] = NovoNome3
     print ("Os nomes agora são %s" % (ListaNomes))
     
elif NovoNome == 4:
     NovoNome4 = str(input("Novo Nome: "))
     ListaNomes [3] = NovoNome4
     print ("Os nomes agora são %s" % (ListaNomes))
     
elif NovoNome == 5:
     NovoNome5 = str(input("Novo Nome: "))
     ListaNomes [4] = NovoNome5
     print ("Os nomes agora são %s" % (ListaNomes))     

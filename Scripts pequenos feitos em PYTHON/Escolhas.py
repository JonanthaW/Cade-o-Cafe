import random


adjetivo = open('adjetivo.txt', 'r')
linhas = adjetivo.readlines()
escolhaAdjetivo = random.choice(linhas)
adjetivo.close()

acao = open('acao.txt', 'r')
linhas = acao.readlines()
escolhaAcao = random.choice(linhas)
acao.close()

nome= open('nome.txt', 'r')
linhas = nome.readlines()
escolhaNome = random.choice(linhas)
nome.close()

verbo = open('verbo.txt', 'r')
linhas = verbo.readlines()
escolhaVerbo = random.choice(linhas)
verbo.close()

print ("o %s %s %s %s"% (escolhaAdjetivo, escolhaNome, escolhaVerbo, escolhaAcao))






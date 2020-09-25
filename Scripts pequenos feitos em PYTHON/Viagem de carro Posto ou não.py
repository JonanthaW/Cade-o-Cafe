#You’re on a long car trip and arrive at a gas station. It’s 200 km to the next station.
#Write a program to figure out if you need to buy gas here, or if you can wait for the
#next station.


print ("Estou em um posto de gasolina, o caminho vai ser longo, devo abastecer?")


Litro = float(input("Quantos litros cabem no tanke? "))
Tamanho = float(input("Quantos porcentos do seu tanke estão com gasolina? "))
PerLitro = float(input("Quantos km por litro seu carro faz? "))

PorcentagemExistente = Litro * Tamanho / 100
PerLitro = PerLitro + 5
ResultadoFinal = PorcentagemExistente * PerLitro


if ResultadoFinal >= 200:
    print ("Você Ainda pode ir %d KM \n O próximo posto está 200 KM distantes, vai na fé irmão" % (ResultadoFinal))
elif ResultadoFinal <= 200:
    print ("Você só poderá ir %d KM \n O próximo posto está 200KM Distantes, Abasteça agora" % (ResultadoFinal))
    

# Contagem de unidades por caixa (Por Hora).


def Nome():
    print ("\n \t\t\t\t\tMADE BY~\n")
    print ("\t\t\t\t\t    J      0OOO    N  N     N")
    print ("\t\t\t\t\t    J     0    0   N   N    N")
    print ("\t\t\t\t\t    J     0    0   N    N   N")
    print ("\t\t\t\t\t    J     0    0   N     N  N")
    print ("\t\t\t\t\t    J     0    0   N      N N")
    print ("\t\t\t\t\tJ   J     0    0   N       NN")
    print ("\t\t\t\t\t JJJ       0000    N       NN\n")
    print ("################################################################################\n\n")
(Nome())
#OPCIONAL
print ("(OPCIONAL) Oi jovem-Aprendiz, Para melhorar sua experiência, porque você não me diz qual o seu nome?!")
UserNome = str(input("Nome: "))

UserHoraTrabalho = str(input("\nAgora, você é da manhã ou da tarde? "))

if UserHoraTrabalho == "manhã" or UserHoraTrabalho == "manha" or UserHoraTrabalho == "Manhã" or UserHoraTrabalho == "Manha":
    print ("\nManhã, Certo?! Acordar cedo é dificil, mas recompensador!!\n")
elif UserHoraTrabalho == "tarde" or UserHoraTrabalho == "Tarde":
    print ("\nTarde, Certo?! Sair de casa sentindo o cheirinho do almoço quase pronto deve ser terrível!!\n")

##################################################################################################################
def CalculodeMeta():
# Dados do cálculo da meta
    print ("\n")
    Meta = int(input("Muito Bem %s, primeiramente qual a sua meta atual?\n Meta: " % (UserNome)))
    print ("\n")
    PrimeiroHorario = int(input("Quantas sandálias foram enviadas no seu primeiro horário?\n Sandálias: "))
    print ("\n")
    SegundoHorario = int(input("Quantas sandálias foram enviadas no seu segundo horário?\n Sandálias: "))
    print ("\n")
    TerceiroHorario = int(input("Quantas sandálias foram enviadas no seu terceiro horário?\n Sandálias: "))
    print ("\n")
    QuartoHorario = int(input("Quantas sandálias foram enviadas no seu quarto horário?\n Sandálias: "))
    print ("\n")

    TotalMeta = PrimeiroHorario + SegundoHorario + TerceiroHorario + QuartoHorario
    TotalCaixas = TotalMeta / 24 # 24 porque cabem 24 sandálias em 1 CAIXA.
    Pares = TotalMeta / 2 # 2 porque são 2 sandálias por PAR
    SandaliasHora = TotalMeta / 4 # 4 porque são 4 horas
    SandaliasMinuto = SandaliasHora / 60 # 60 minutos porque só está sendo calculado 1 hora.
    CaixasHora = TotalCaixas / 4 # 4 porque são 4 HORAS.
    Mantas = TotalMeta / 5 # Cada manta contém 5 sandálias
    BalancimPares = Mantas * 5

    ### CASO TENHA BATIDO A META ###

    BateuMeta = TotalMeta - Meta
    NaoBateuMeta = Meta - TotalMeta

    ##############################

    # O "+0.1" servem para arredondar os respectivos números precedidos.
    # 1 CX = 24 sandálias.
    # 4 horas de trabalho = 240 Minutos.
    # 1HR = 60MIN = 504 sandálias.
    # 21 caixas por horário.
    # 3,5 caixas a cada 10 min dá 504.
    # 4 caixas a cada 10 min dá 576.

    print ("\tA sua equipe fez, em média, %d sandálias por HORA" % (SandaliasHora))
    print ("\tSua equipe fez %d sandálias e meia por MINUTO" % (SandaliasMinuto))
    print ("\tA sua equipe fez %d sandálias" % (TotalMeta))
    print ("\tA sua equipe fez %d caixas completas, sendo %d caixas por HORA" % (TotalCaixas, CaixasHora))
    print ("\tA sua equipe fez %d pares de sandálias" % (Pares))
    print ("\tA pessoa que estava no balancim cortou aproximadamente %d mantas\n\te lançou o balancim %d vezes" % (Mantas, BalancimPares))
    print ("\tA pessoa que estava na escariadeira, vulgo furadeira,\n\tapertou os botões %d vezes. \n\tHaja Dedo" % (Pares))
    if TotalMeta > Meta:
        print ("\tSua equipe conseguiu bater o horário, com o adicional de %d sandálias.\n\n\t\tPARABÉNS" % (BateuMeta))
    elif TotalMeta == Meta:
        print ("\tSua equipe fez a meta necessária, \n\t\nQUE SORTE!.")
    else:
        print ("\tSua equipe não conseguiu bater a meta, ainda seriam necessárias %d sandálias." % (NaoBateuMeta))
    print ("\n")

###################################################################################################################
                        
# Cálculo da porcentagem de sandálias

def DadosEspecificos():
    print ("\nPorcentagem e dados sobre o trabalho da sua equipe de forma separada.\n")

    
    if UserHoraTrabalho == "manhã" or UserHoraTrabalho == "manha" or UserHoraTrabalho == "Manhã" or UserHoraTrabalho == "Manha":
        PorcentagemSandaliasHorarios = str(input("Quantos horários você quer calcular? (Um, Dois, Tres ou Quatro) "))
                                       
        if PorcentagemSandaliasHorarios == "Um":
            print ("\nMuito Bem, você escolheu calcular apenas um horário ( 06:00 AM até 07:00 AM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas sandálias foram enviadas?\n sandálias: "))
            print ("A sua equipe conseguiu fazer %d sandálias" % (PrimeiroHorarioSandalias))

        elif PorcentagemSandaliasHorarios == "Dois":
            print ("\nMuito Bem, você escolheu calcular dois horários (06:00 AM até 08:00 AM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas sandálias foram enviadas no primeiro horário?\n Sandalias: "))
            SegundoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no segundo horário?\n Sandalias: "))
            TotalSandaliasHorarios2 = PrimeiroHorarioSandalias + SegundoHorarioSandalias
            print ("A sua equipe conseguiu fazer %d sandálias" % (TotalSandaliasHorarios2))
                                 

        elif PorcentagemSandaliasHorarios == "Tres":
            print ("\nMuito Bem, você escolheu calcular três horários (06:00 AM até 09:00 AM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no primeiro horário?\n Sandalias: "))
            SegundoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no segundo horário? \n Sandalias: "))
            TerceiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no terceiro horário?\n Sandalias: "))
            TotalSandaliasHorarios3 = PrimeiroHorarioSandalias + SegundoHorarioSandalias + TerceiroHorarioSandalias
            print ("A sua equipe conseguiu fazer %d sandálias" % (TotalSandaliasHorarios3))
                                 

        elif PorcentagemSandaliasHorarios == "Quatro":
            print ("\nMuito Bem, você escolheu calcular quatro horários (06:00 AM até 10:00 AM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no primeiro horário?\n Sandalias: "))
            SegundoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no segundo horário? \n Sandalias: "))
            TerceiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no terceiro horário?\n Sandalias: "))
            QuartoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no quarto horário?\n Sandalias: "))
            TotalSandaliasHorarios4 = PrimeiroHorarioSandalias + SegundoHorarioSandalias + TerceiroHorarioSandalias + QuartoHorarioSandalias
            print ("A meta da sua equipe foi de %d sandálias" % (TotalSandaliasHorarios4))

    elif UserHoraTrabalho == "tarde" or UserHoraTrabalho == "Tarde":
        PorcentagemSandaliasHorarios = str(input("Quantos horários você quer calcular? (Um, Dois, Tres ou Quatro) "))
                                       
        if PorcentagemSandaliasHorarios == "Um" or PorcentagemSandaliasHorarios == "um":
            print ("\nMuito Bem, você escolheu calcular apenas um horário ( 10:00 AM até 11:00 AM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas sandálias foram enviadas?\n sandálias: "))
            print ("A sua equipe conseguiu fazer %d sandálias" % (PrimeiroHorarioSandalias))

        elif PorcentagemSandaliasHorarios == "Dois" or PorcentagemSandaliasHorarios == "dois":
            print ("\nMuito Bem, você escolheu calcular dois horários (10:00 AM até 12:00 PM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas sandálias foram enviadas no primeiro horário?\n Sandalias: "))
            SegundoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no segundo horário?\n Sandalias: "))
            TotalSandaliasHorarios2 = PrimeiroHorarioSandalias + SegundoHorarioSandalias
            print ("A sua equipe conseguiu fazer %d sandálias" % (TotalSandaliasHorarios2))
                                 

        elif PorcentagemSandaliasHorarios == "Tres" or PorcentagemSandaliasHorarios == "tres" or PorcentagemSandaliasHorarios == "Três" or PorcentagemSandaliasHorarios == "três":
            print ("\nMuito Bem, você escolheu calcular três horários (10:00 AM até 01:00 PM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no primeiro horário?\n Sandalias: "))
            SegundoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no segundo horário? \n Sandalias: "))
            TerceiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no terceiro horário?\n Sandalias: "))
            TotalSandaliasHorarios3 = PrimeiroHorarioSandalias + SegundoHorarioSandalias + TerceiroHorarioSandalias
            print ("A sua equipe conseguiu fazer %d sandálias" % (TotalSandaliasHorarios3))
                                 

        elif PorcentagemSandaliasHorarios == "Quatro" or PorcentagemSandaliasHorarios == "quatro":
            print ("\nMuito Bem, você escolheu calcular quatro horários (10:00 AM até 02:00 PM)\n")
            PrimeiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no primeiro horário?\n Sandalias: "))
            SegundoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no segundo horário? \n Sandalias: "))
            TerceiroHorarioSandalias = int(input("Quantas Sandalias foram enviadas no terceiro horário?\n Sandalias: "))
            QuartoHorarioSandalias = int(input("Quantas Sandalias foram enviadas no quarto horário?\n Sandalias: "))
            TotalSandaliasHorarios4 = PrimeiroHorarioSandalias + SegundoHorarioSandalias + TerceiroHorarioSandalias + QuartoHorarioSandalias
            print ("A meta da sua equipe foi de %d sandálias" % (TotalSandaliasHorarios4))
        

############################################################################################################################################
while "MenuPrincipal":
    MenuPrincipal = str(input("\nEscolha uma das opções que você deseja utilizar. \n(Calcular Meta ou Dados): "))

    if MenuPrincipal == "Calcular Meta":
        (CalculodeMeta())
    elif MenuPrincipal == "Dados":
        (DadosEspecificos())
    
                        

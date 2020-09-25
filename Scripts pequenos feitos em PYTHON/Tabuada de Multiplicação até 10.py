#Write a program to print a multiplication table (a times table). At the start, it should
#ask the user which table to print.


while ("Tabuada"):
    Multip = int(input("\nQual tabuada de multiplicação você deseja? "))

    Dividendo = int(input("\nAté quanto a tabuada deve ir? "))


    print ("\nEntão toma:\n")

    for MultipLoop in range(0, Dividendo + 1):
     MultipResult = Multip * MultipLoop
     print ("%i x %i = %i" % (Multip, MultipLoop, MultipResult))

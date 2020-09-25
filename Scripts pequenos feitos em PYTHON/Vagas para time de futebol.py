# A soccer team is looking for girls from ages 10 to 12 to play on their team. Write a program to ask the user’s age and if male or female (using “m” or “f”). Display a message
# indicating whether the person is eligible to play on the team.
# Bonus: Make the program so that it doesn’t ask for the age unless the user is a girl.





print ("Vagas para time de futebol: Apenas feminino com idade entre 10 e 12 anos")

Sexo = str(input("Você é m ou f? "))
if Sexo == "f":
            Fidade = int(input("Muito bem, agora qual a sua idade? "))
            if Fidade >= 10 and Fidade <= 12:
                  print ("Você pode participar, boa sorte")
  
elif Sexo == "m":
    print ("Você não pode participar, desculpe")

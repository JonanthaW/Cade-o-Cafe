N = int(input("Digite o valor de n: "))

fat = 1
 
while N > 0:
    fat = fat * N
    N -= 1
 
print(fat)
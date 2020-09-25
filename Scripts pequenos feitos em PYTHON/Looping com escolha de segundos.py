#Modify the program to use a variable loop. The program should ask the user where the
#countdown should start

import time
CountTimer = int(input("Quantos segundos? "))
for i in range (CountTimer, 0, -1):
    print (i, ("*" * i))
    time.sleep(1)
print ("PARTIU!")    

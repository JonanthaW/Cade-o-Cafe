import time

Hora = 00
Minutos = 00
Segundos = 00

while 1:
    for i in range(0, 60):
        time.sleep(0.1)
        Segundos += 1
        print ("%s:%s:%s"% (Hora, Minutos, i))
        if Segundos == 59:
            Minutos += 1
            Segundos = 00
            if Minutos == 59:
                Hora += 1
                Minutos = 00
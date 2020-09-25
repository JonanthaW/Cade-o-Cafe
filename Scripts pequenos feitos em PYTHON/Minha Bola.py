import time

class ball:
    def bounce(self):
        if self.direction == "cima":
            time.sleep(1)
            self.direction = "baixo"
        elif self.direction == "baixo":
            time.sleep(1)
            self.direction = "cima"
MinhaBola = ball()
MinhaBola.direction = "baixo"
MinhaBola.color = "vermelha"
MinhaBola.size = "pequena"

print ("Eu criei minha bola")
print ("Minha bola é", MinhaBola.size)
print ("Minha bola é %s" % (MinhaBola.color))
print ("Minha bola está indo parada")
print ("Chutei a bola")

while ("Bola"):
    MinhaBola.bounce()
    print ("Agora a bola está indo para ", MinhaBola.direction)


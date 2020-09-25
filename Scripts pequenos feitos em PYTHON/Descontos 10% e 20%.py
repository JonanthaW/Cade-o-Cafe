print ("Promoção Lojas Kukibano\n Descontos de 10% em compras de R$10 Ou menos e de 20% em compras maiores que R$10\n")

while ("preçoCompra"):
    preçoCompra = float(input("Qual o preço do produto? "))
    if preçoCompra <= 10:
        Compra10Menos = preçoCompra * 10 / 100
        Preço10Mais = preçoCompra - Compra10Menos
        print ("Seu desconto foi de 10%%, no total de: R$%.2f" % (Compra10Menos))
        print ("Sua Compra saiu por apenas R$ %.2f\n" % (Preço10Mais))

    elif preçoCompra >= 10:
        Compra10Mais = preçoCompra * 20 / 100
        Preço10Mais = preçoCompra - Compra10Mais
        print ("Seu desconto foi de 20%%, no total de: R$%.2f" % (Compra10Mais))
        print ("Sua compra saiu por apenas R$ %.2f\n" % (Preço10Mais))

                    

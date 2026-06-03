import moeda
p = float(input('Digite o preço: R$'))
print(f'O aumento de {p} com 10% é {moeda.aumento(p, 10)}')
print(f'O diminuição de {p} com 10% é {moeda.diminui(p, 10)}')
print(f'O dobro de {p} é {moeda.dobro(p)}')
print(f'A metade de {p} é {moeda.metade(p)}')
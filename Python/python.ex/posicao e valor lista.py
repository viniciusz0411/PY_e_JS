from random import randint
valores = []
for c in range(randint(1, 10)):
    valores.append (randint(1, 100))
for posicao, valor in enumerate(valores):
    print(f'na posicao {posicao+1} encontrei o valor {valor}')
print(f'ele tem {len(valores)} numeros, e em ordem fica {sorted(valores )}')

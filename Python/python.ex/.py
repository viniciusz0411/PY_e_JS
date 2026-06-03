from random import randint
palpites=[]
jogo=[]
tot=1
vezes=int(input('quantos paplpites? '))
while tot <= vezes:
    cont=0
    while True:
        num = randint(0,61)
        if num not in palpites:
            palpites.append(num)
            cont+=1
        if cont==6:
            break   
    palpites.sort()
    jogo.append(palpites[:])
    palpites.clear()
    tot+=1         
for i, l in enumerate(jogo):
    print(f'o palpite {i+1} é {l}')
def fala(msg):
    ok = False
    valor=0
    while True:
        n=str(input(msg))
        if n.isnumeric():
            valor=int(n)
            ok=True
        else:
            print('Erro, digite novamente!')
        if ok:
            break
    return valor
n=fala('um numero: ')
print(f'voce digitou o numero {n}')
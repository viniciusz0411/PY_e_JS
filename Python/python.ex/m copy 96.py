def ajuda(com):
    """
    envia o dicionário do processo mencionado.
    """
    help(com)

def tit(msg, cor=0):
    tam=len(msg)
    print('-'*tam)
    print(msg)
    print('-'*tam)


comando=''
m=str(input('deseja ver o manual da ajuda? ')).upper().strip()[0]
if m=='S':
    help(ajuda)
while True:
    tit('SISTEMA DE AJUDA')
    comando=str(input('função ou biblioteca? '))
    if comando.upper()=='FIM':
        break
    else:
        ajuda(comando)
tit('ATE LOGO')
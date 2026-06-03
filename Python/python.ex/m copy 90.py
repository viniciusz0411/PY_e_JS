
def voto(ano):
    """
    Descobre se a pessoa pode votar.
    """
    from datetime import date
    atual = date.today().year
    idd=atual-ano
    if idd<18:
        return f'com {idd} anos, não vota.' 
    else:
        return f'com {idd} anos, vota!' 
print(voto(int(input('em que ano nasceu?'))))
help(voto)
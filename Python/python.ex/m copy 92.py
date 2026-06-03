def ficha(jog, gol):
    if jog=='':
        jog='<desconhecido>'
    if gol=='':
        gol=0
    print(f'o jogador {jog} fez {gol} gols.')






ficha(jog=str(input('qual o nome do jogador? ')), gol=(input('quantos gols? ')))
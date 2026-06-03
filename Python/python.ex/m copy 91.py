def fatorial(num, show = False ):
    """
    num=fatorial
    show= true, mostra a conta
    show= false, não mostra a conta
    """
    mult=1
    for c in range(num, 0, -1):
        print(f' {c} ', end='')
        if show ==True:
            if c>1:
                print(' x ', end='')
            else:
                print(' = ', end ='')
        mult*=c
    return mult
print(fatorial(5, show=True))
help(fatorial)
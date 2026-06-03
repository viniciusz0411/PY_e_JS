pala= 'bala', 'doce', 'salgado'
for p in pala:
    print(f'\nna palavra {p} temos', end=' ')
    for l in p:
        if l.lower() in 'aeiou':
            print(l, end=' ')
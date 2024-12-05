
def rombo(size):
    espacio = ""
    caracter = "%"

    # creando espacios
    for i in range(size):
        espacio += " "

    # primera mitad
    for i in range(size):
        print(espacio, caracter)
        espacio = espacio[0:-1]
        caracter += (f'%%')

    # segunda mitad
    for i in range(size):
        print(espacio, caracter)
        espacio += ' '
        caracter = caracter[0:-2]

    # puntita
    print(espacio, caracter) 

rombo(15)


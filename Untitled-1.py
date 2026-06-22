def pedir_numero(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("Entrada inválida. Digite um número válido.")


def calcular_operacoes(a, b):
    resultado = {
        "soma": a + b,
        "subtracao": a - b,
        "multiplicacao": a * b,
        "exponencial": a ** b,
    }
    if b != 0:
        resultado["divisao"] = a / b
    else:
        resultado["divisao"] = None
    return resultado


def exibir_resultados(resultados):
    print(f"A soma dos números é: {resultados['soma']}")
    print(f"A subtração dos números é: {resultados['subtracao']}")
    print(f"A multiplicação dos números é: {resultados['multiplicacao']}")
    if resultados["divisao"] is None:
        print("A divisão não pode ser realizada: divisor é zero.")
    else:
        print(f"A divisão dos números é: {resultados['divisao']}")
    print(f"O exponencial dos números é: {resultados['exponencial']}")


def main():
    nome = input("Diga seu nome: ")
    idade = input("Diga sua idade: ")
    print(f"Olá, {nome}! Você tem {idade} anos!")

    a = pedir_numero("Diga um número: ")
    b = pedir_numero("Diga outro número: ")

    resultados = calcular_operacoes(a, b)
    exibir_resultados(resultados)


if __name__ == "__main__":
    main()

//Lista de exercícios - variáveis

function exercicio01() {
    let nome = prompt("Digite seu nome: ");
    let idade = parseInt(prompt("Ditite sua idade: "));
    let altura = parseFloat(prompt("Digite sua altura: "));

    console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos e minha altura é " + altura + " metros");

}

function exercicio02() {
    let idadeAtual = parseInt(prompt("Digite sua idade atual:"));
    let idadeFutura = idadeAtual + 5;

    alert("Sua idade daqui a 5 anos será: " + idadeFutura);
}

function exercicio03() {
    let valorReal = parseFloat(prompt("Digite um valor em real").replace("R$", "").replace(",", "."));
    let valorDolar = valorReal / 5;

    alert("Seu valor convertido em dolar é: US$ " + valorDolar);
}

function exercicio04() {
    let luzAcesa = parseInt(prompt("Digite 1 para acender a luz ou 0 para apagar a luz"));

    if (luzAcesa === 1) {
        alert("A luz está acesa")
    } else if (luzAcesa === 0) {
        alert("A luz está apagada")
    } else {
        exercicio04()
    };
}

function exercicio05() {
    let largura = parseFloat(prompt("Digite a largura do retângulo")
        .replace(",", ".")
        .replace("m", "")
        .replace("metros", "")
        .replaceAll(" ", ""));

    let altura = parseFloat(prompt("Digite a altura do retângulo")
        .replace(",", ".")
        .replace("m", "")
        .replace("metros", "")
        .replaceAll(" ", ""));

    let area = largura * altura;
    console.log("A areá do retângulo é " + area + " metros quadrados.");
}

function exercicio06() {
    let nota01 = parseFloat(prompt("Digite a primeira nota"));
    let nota02 = parseFloat(prompt("Digite a segunda nota"));
    let nota03 = parseFloat(prompt("Digite a terceira nota"));

    let media = (nota01 + nota02 + nota03) / 3;

    console.log("A media das notas é: " + media);
}

function exercicio07() {
    let precoOriginal = parseFloat(prompt("Digite o valor do produto")
        .replace(",", ".")
        .replace("reais", "")
        .replace("R$", "")
        .replaceAll(" ", ""));

    let desconto = parseFloat(prompt("Digite a porcentagem do desconto")
        .replace("%", "")
        .replace("porcentos", "")
        .replace(",", ".")
        .replaceAll(" ", ""));

    let valorDesconto = (precoOriginal / 100) * desconto;

    let valorFinal = precoOriginal - valorDesconto;

    alert("O valor final com desconto é: R$ " + valorFinal);
}

function exercicio08() {
    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em celsius"));
    let fahrenheit = temperaturaCelsius * (9 / 5) + 32;

    alert("A temperatura em Fahrenheit é de: " + fahrenheit + "°F");
}

function exercicio09() {
    let numero01 = parseInt(prompt("Digite o primeiro numero"));
    let numero02 = parseInt(prompt("Digite o segundo numero"));

    let soma = numero01 + numero02;
    let produto = numero01 * numero02;

    console.log("A soma é " + soma + "\nO produto é " + produto);
}

function exercicio10() {
    let primeiro = parseInt(prompt("Digite o primeiro valor"));
    let segundo = parseInt(prompt("Digite o segundo valor"));
    let terceiro = segundo;
    let quarto = primeiro;

    console.log("Primeira variavel: " + primeiro +
        "\nSegunda variavel: " + segundo +
        "\n\nPrimeira variavel com valor invertido: " + terceiro +
        "\nSegunda variavel com valor invertido: " + quarto);
}

// Lista de exercícios - Métodos de String e toFixed()

function exercicio11() {
    let frase = prompt("Digite seu nome e sua idade").replace("anos", "aninhos");
    alert("Sua frase modificada: " + frase);
}

function exercicio12() {
    let frase = prompt("Digite uma frase com varias palavras 'bola'");
    let formatado = frase.replaceAll("bola", "");

    alert("Frase original: " + frase + "\nFrase formatada: " + formatado);
}

function exercicio13() {
    let nome = prompt("Digite seu nome completo");
    let partes = nome.split(' ');

    let primeiroNome = partes[0];
    let ultimoNome = partes[partes.length - 1];

    alert("Seu primeiro nome é: " + primeiroNome + "\nSeu segundo nome é : " + ultimoNome);
}

function exercicio14() {
    let frase = prompt("Digite uma frase");
    let escolha = frase.substring(10, 20);

    alert("Parte escolhida do texto: " + escolha);
}

function exercicio15() {
    let frase = prompt("Digite qualquer frase com espaço no inicio e no fim");
    let fraseFormatada = frase.trim();

    alert("Sua frase com espaços: '" + frase + "'" + "\nSua frase formatada: '" + fraseFormatada + "'");
}

function exercicio16() {
    let frase = prompt("Digite uma frase com espaços no inicos");
    let fraseFormatada = frase.trimStart();

    alert("Sua frase com espaços: '" + frase + "'" + "\nSua frase formatada: '" + fraseFormatada + "'");
}

function exercicio17() {
    let frase = prompt("Digite uma frase com espaços no final");
    let fraseFormatada = frase.trimEnd();

    alert("Sua frase com espaços: '" + frase + "'" + "\nSua frase formatada: '" + fraseFormatada + "'");
}

function exercicio18() {
    let numero = prompt("Digite seu numero de telefone");
    let numeroFormatado = numero.padStart(11, "47");

    alert("Numero de telefone: " + numero + "\nNumero formatado: " + numeroFormatado);
}

function exercicio19() {
    let saldo = prompt("Digite seu saldo do banco");
    let saldoNovo = saldo.padEnd(10, "0");

    alert("Seu saldo antes: " + saldo + "\nSaldo novo: " + saldoNovo);
}

function exercicio20() {
    let valor = parseFloat(prompt("Digite um valor com varias casas decimais").replace(",", "."));
    let valorFormatado = valor.toFixed(2);

    alert("Valor: R$ " + valorFormatado);
}

// Lista de exercícios - Estruturas Condicionais (if)

function exercicio21() {
    let idade = parseInt(prompt("Digite sua idade"));

    if (idade >= 18) {
        alert("Você é maior de idade");
    } else {
        alert("Você é menor de idade");
    }
}

function exercicio22() {
    let numero = parseInt(prompt("Digite um numero"));

    if (numero % 2 === 0) {
        alert("O numero é par");
    } else {
        alert("O numero é ímpar");
    }
}

function exercicio23() {
    let nota = parseInt(prompt("Digite a nota"));

    if (nota >= 7) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
}

function exercicio24() {
    let senha = prompt("Digite uma senha");
    let senhacerta = "1234";

    if (senha === senhacerta) {
        alert("Acesso permitido");
    } else {
        alert("Senha incorreta");
    }
}

function exercicio25() {
    let valorCompra = parseInt(prompt("Digite o valor da compra"));

    if (valorCompra > 100) {
        alert("Você ganhou um desconto de 10%");
    } else {
        alert("Sem desconto disponível");
    }
}

function exercicio26() {
    let idade = parseInt(prompt("Digite sua idade"));

    let idadeNovo = ""

    if (idade <= 12) {
        idadeNovo = "Criança";
    } else if (idade > 12 && idade <= 17) {
        idadeNovo = "Adolescente";
    } else if (idade >= 18 && idade <= 59) {
        idadeNovo = "Adulto";
    } else {
        idadeNovo = "Idoso";
    }
    alert("Você é: " + idadeNovo);
}

function exercicio27() {
    let numero1 = parseInt(prompt("Digite o primeiro numero"));
    let numero2 = parseInt(prompt("Digite o segundo numero"));

    if (numero1 > numero2) {
        alert("Numero maior: " + numero1);
    } else if (numero1 < numero2) {
        alert("Numero maior: " + numero2);
    } else {
        alert("Os numeros sao iguais");
    }
}

function exercicio28() {
    let numero = parseInt(prompt("Digite um numero"));

    if (numero > 0) {
        alert("Positivo");
    } else if (numero < 0) {
        alert("Negativo");
    } else {
        alert("Zero");
    }
}

function exercicio29() {
    let media = parseFloat(prompt("Digite a media do aluno").replace(",", ".").replaceAll(" ", ""));

    if (media >= 7) {
        alert("Aprovado");
    } else if (media >= 5 && media <= 6.9) {
        alert("Recuperação");
    } else {
        alert("Reprovado");
    }
}

function exercicio30() {
    let numero = parseInt(prompt("Digite um numero"));

    if (numero % 3 === 0 && numero % 5 === 0) {
        alert("Múltiplo de 3 e 5");
    } else if (numero % 3 === 0) {
        alert("Múltiplo de 3");
    } else if (numero % 5 === 0) {
        alert("Múltiplo de 5");
    } else {
        alert("Não é múltiplo de 3 nem de 5");
    }
}

function exercicio31() {
    let idade = parseInt(prompt("Digite sua idade"));
    let ingresso = prompt("Você tem ingresso?");

    if (idade >= 18 && ingresso === "sim") {
        alert("Entrada permitida");
    } else {
        alert("Entrada negada");
    }
}

function exercicio32() {
    let valor = parseFloat(prompt("Digite o valor da compra").replace(",", ".").replaceAll(" ", ""));
    let vip = prompt("Você é um cliente VIP?");

    if (valor > 200 || vip === "sim") {
        alert("Você ganhou um brinde");
    } else {
        alert("Sem bônus disponível");
    }
}

function exercicio33() {
    let login = prompt("Digite o login");
    let senha = parseInt(prompt("Digite a senha"));

    if (login === "admin" && senha === 1234) {
        alert("Login bem-sucedido");
    } else {
        alert("Login ou senha inválidos");
    }
}

function exercicio34() {
    let lado1 = parseFloat(prompt("Digite o primeiro lado do triangulo").replace(",", ".").replaceAll(" ", ""));
    let lado2 = parseFloat(prompt("Digite a segunda parte do triangulo").replace(",", ".").replaceAll(" ", ""));
    let lado3 = parseFloat(prompt("Digite a terceira parte do triangulo").replace(",", ".").replaceAll(" ", ""));

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        alert("Triangulo valido");
    } else {
        alert("Triangulo invalido");
    }
}

function exercicio35() {
    let ano = parseInt(prompt("Digite o ano"));

    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        alert("Ano bissexto");
    } else {
        alert("Ano comum");
    }
}

// LISTA DE EXERCICIOS DO GITHUB DO PROFESSOR

function exerciociogit7() {
    let numero = parseInt(prompt("Digite um numero"));

    let variavel1 = "";
    let variavel2 = "";
    let variavel3 = "";
    let variavel4 = "";
    let variavel5 = "";
    let variavel6 = "";
    let variavel7 = "";

    if (numero % 2 === 0) {
        variavel1 = "par";
    } else if (numero % 2 !== 0 || numero === 1) {
        variavel1 = "impar";
    } else {
        variavel1 = "neutro";
    }

    if (numero > 0) {
        variavel2 = "Positivo";
    } else {
        variavel2 = "Negativo";
    }

    if (numero > 10) {
        variavel3 = "Maior que 10";
    } else {
        variavel3 = "Menor que 10";
    }

    if (numero <= 50) {
        variavel4 = "Menor ou igual a 50";
    } else {
        variavel4 = "Maior que 50";
    }

    if (numero < -10) {
        variavel5 = "menor que -10";
    } else {
        variavel5 = "Maior que -10";
    }

    if (numero >= 30) {
        variavel6 = "Maior ou igual a 30";
    } else {
        variavel6 = "Menor que 30";
    }

    if (numero !== 1) {
        variavel7 = "Diferente de 1";
    } else {
        variavel7 = "Igual a 1";
    }

    alert("Seu numero é:" +
        "\n\nO numero é: " + variavel1 +
        "\nO numero é: " + variavel2 +
        "\nO numero é: " + variavel3 +
        "\nO numero é: " + variavel4 +
        "\nO numero é: " + variavel5 +
        "\nO numero é: " + variavel6 +
        "\nO numero é: " + variavel7);
}

function exerciociogit9() {
    let numero1 = parseInt(prompt("Digite o primeiro numero"));
    let numero2 = parseInt(prompt("Digite o segundo numero"));
    let numero3 = parseInt(prompt("Digite o terceiro numero"));
    let numero4 = parseInt(prompt("Digite o quarto numero"));

    if (numero1 === numero2 && numero1 === numero3 && numero1 === numero4) {
        alert("Pode ser um quadrado");
    } else {
        alert("Não pode ser um quadrado");
    }
}

function exerciociogit10() {
    let numero1 = parseInt(prompt("Digite o primeiro numero"));
    let numero2 = parseInt(prompt("Digite o segundo numero"));
    let numero3 = parseInt(prompt("Digite o terceiro numero"));
    let numero4 = parseInt(prompt("Digite o quarto numero"));

    if (numero1 === numero3 && numero2 === numero4) {
        alert("Pode ser um retangulo");
    } else if (numero1 === numero2 && numero3 === numero4) {
        alert("Pode ser um retangulo");
    } else if (numero1 === numero4 && numero2 === numero3) {
        alert("Pode ser um retangulo");
    } else {
        alert("Não pode ser um retangulo");
    }
}

function exerciociogit14() {
    let numero1 = parseInt(prompt("Digite um numero"));
    let numero2 = parseInt(prompt("Digite um numero"));
    let numero3 = parseInt(prompt("Digite um numero"));

    let maior = "";
    let meio = "";
    let menor = "";

    if (numero1 >= numero2 && numero1 >= numero3 && numero2 >= numero3) {
        maior = numero1;
        meio = numero2;
        menor = numero3;
    } else if (numero1 >= numero2 && numero1 >= numero3 && numero3 >= numero2) {
        maior = numero1;
        meio = numero3;
        menor = numero2;
    } else if (numero2 >= numero1 && numero2 >= numero3 && numero1 >= numero3) {
        maior = numero2;
        meio = numero1;
        menor = numero3;
    } else if (numero2 >= numero1 && numero2 >= numero3 && numero3 >= numero1) {
        maior = numero2;
        meio = numero3;
        menor = numero1;
    } else if (numero3 >= numero1 && numero3 >= numero2 && numero1 >= numero2) {
        maior = numero3;
        meio = numero1;
        menor = numero2;
    } else if (numero3 >= numero1 && numero3 >= numero2 && numero2 >= numero1) {
        maior = numero3;
        meio = numero2; 
        menor = numero1;
    } else if (numero1 === numero2 && numero1 === numero3 && numero2 === numero3) {
        maior = numero1;
        meio = numero2;
        menor = numero3;
    }
    
    alert(menor + " - " + meio + " - " + maior);
}

function exerciociogit17() {

}
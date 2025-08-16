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

function exerciciogit17() {
    let dataNascimento = prompt("Digite o seu ano de nascimento");

    let dataNova = dataNascimento.split("");

    let anoMilhar = dataNova[0];
    let anoCentena = dataNova[1];
    let anoDezena = dataNova[2];
    let ano = dataNova[3];

    if (anoMilhar === "1") {
        anoMilhar = "Mil";
    } else if (anoMilhar === "2") {
        anoMilhar = "Dois mil";
    }

    if (anoCentena === "1") {
        anoCentena = "cento";
    } else if (anoCentena === "0") {
        anoCentena = "";
    } else if (anoCentena === "2") {
        anoCentena = "duzentos ";
    } else if (anoCentena === "3") {
        anoCentena = "trezentos";
    } else if (anoCentena === "4") {
        anoCentena = "quatrocentos";
    } else if (anoCentena === "5") {
        anoCentena = "quinhentos";
    } else if (anoCentena === "6") {
        anoCentena = "seiscentos";
    } else if (anoCentena === "7") {
        anoCentena = "setecentos";
    } else if (anoCentena === "8") {
        anoCentena = "oitocentos";
    } else if (anoCentena === "9") {
        anoCentena = "novecentos";
    }

    if (anoDezena === "1" && ano === "1") {
        anoDezena = " e onze"
        ano = "";
    } else if (anoDezena === "1" && ano === "2") {
        anoDezena = " e doze";
        ano = "";
    } else if (anoDezena === "1" && ano === "3") {
        anoDezena = " e treze";
        ano = "";
    } else if (anoDezena === "1" && ano === "4") {
        anoDezena = " e quatorze";
        ano = "";
    } else if (anoDezena === "1" && ano === "5") {
        anoDezena = " e quinze";
        ano = "";
    } else if (anoDezena === "1" && ano === "6") {
        anoDezena = " e dezesseis";
        ano = "";
    } else if (anoDezena === "1" && ano === "7") {
        anoDezena = " e dezessete";
        ano = "";
    } else if (anoDezena === "1" && ano === "8") {
        anoDezena = " e dezoito";
        ano = "";
    } else if (anoDezena === "1" && ano === "9") {
        anoDezena = " e dezenove";
        ano = "";
    } else if (anoDezena === "1" && ano === "0") {
        anoDezena = " e dez";
        ano = "";
    } else if (anoDezena === "2") {
        anoDezena = "e vinte";
    } else if (anoDezena === "3") {
        anoDezena = " e trinta";
    } else if (anoDezena === "0") {
        anoDezena = "";
    } else if (anoDezena === "4") {
        anoDezena = "e quarenta";
    } else if (anoDezena === "5") {
        anoDezena = " e cinquenta";
    } else if (anoDezena === "6") {
        anoDezena = "e sessenta";
    } else if (anoDezena === "7") {
        anoDezena = " e setenta";
    } else if (anoDezena === "8") {
        anoDezena = " e oitenta";
    } else if (anoDezena === "9") {
        anoDezena = " e noventa";
    }

    if (ano === "1") {
        ano = " e um";
    } else if (ano === "0") {
        ano = "";
    } else if (ano === "2") {
        ano = " e dois";
    } else if (ano === "3") {
        ano = " e três";
    } else if (ano === "4") {
        ano = " e quatro";
    } else if (ano === "5") {
        ano = " e cinco";
    } else if (ano === "6") {
        ano = " e seis";
    } else if (ano === "7") {
        ano = " e sete";
    } else if (ano === "8") {
        ano = " e oito";
    } else if (ano === "9") {
        ano = " e nove";
    }

    alert(anoMilhar + " " + anoCentena + anoDezena + ano);
}

function exerciciogit18() {
    let horaNascimento = prompt("Digite a hora do nascimento");

    let horaNova = horaNascimento.split("");
    // 13:13:13 - 1[0] - 3[1] - :[2] - 1[3] - 3[4] - :[5] - 1[6] - 3[7] 
    let horaPrimeiro = horaNova[0];
    let horaSegundo = horaNova[1];
    let minutoPrimeiro = horaNova[3];
    let minutoSegundo = horaNova[4];
    let segundoPrimeiro = horaNova[6];
    let seundoSegundo = horaNova[7];

    let horaFinal = "";
    let minutoFinal = "";
    let segundoFinal = "";

    if (horaPrimeiro === "0" && horaSegundo === "0") {
        horaFinal = "meia noite";
    } else if (horaPrimeiro === "0" && horaSegundo === "1") {
        horaFinal = "uma hora";
    } else if (horaPrimeiro === "0" && horaSegundo === "2") {
        horaFinal = "duas horas";
    } else if (horaPrimeiro === "0" && horaSegundo === "3") {
        horaFinal = "três horas";
    } else if (horaPrimeiro === "0" && horaSegundo === "4") {
        horaFinal = "quatro horas";
    } else if (horaPrimeiro === "0" && horaSegundo === "5") {
        horaFinal = "cinco horas";
    } else if (horaPrimeiro === "0" && horaSegundo === "6") {
        horaFinal = "seis horas";
    } else if (horaPrimeiro === "0" && horaSegundo === "7") {
        horaFinal = "sete horas";
    } else if (horaPrimeiro === "0" && horaSegundo === "8") {
        horaFinal = "oito horas";
    } else if (horaPrimeiro === "0" && horaSegundo === "9") {
        horaFinal = "nove horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "0") {
        horaFinal = "dez horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "1") {
        horaFinal = "onze horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "2") {
        horaFinal = "doze horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "3") {
        horaFinal = "treze horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "4") {
        horaFinal = "quatorze horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "5") {
        horaFinal = "quinze horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "6") {
        horaFinal = "dezesseis horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "7") {
        horaFinal = "dezessete horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "8") {
        horaFinal = "dezoito horas";
    } else if (horaPrimeiro === "1" && horaSegundo === "9") {
        horaFinal = "dezenove horas";
    } else if (horaPrimeiro === "2" && horaSegundo === "0") {
        horaFinal = "vinte horas";
    } else if (horaPrimeiro === "2" && horaSegundo === "1") {
        horaFinal = "vinte e uma horas";
    } else if (horaPrimeiro === "2" && horaSegundo === "2") {
        horaFinal = "vinte e duas horas";
    } else if (horaPrimeiro === "2" && horaSegundo === "3") {
        horaFinal = "vinte e três horas";
    } else if (horaPrimeiro === "2" && horaSegundo === "4") {
        horaFinal = "meia noite";
    }

    if (minutoPrimeiro === "0" && minutoSegundo === "0") {
        minutoPrimeiro = "";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "1") {
        minutoPrimeiro = " um minuto";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "2") {
        minutoPrimeiro = " dois minutos";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "3") {
        minutoPrimeiro = " três minutos";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "4") {
        minutoPrimeiro = " quatro minutos";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "5") {
        minutoPrimeiro = " cinco minutos";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "6") {
        minutoPrimeiro = " seis minutos";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "7") {
        minutoPrimeiro = " sete minutos";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "8") {
        minutoPrimeiro = " oito minutos";
    } else if (minutoPrimeiro === "0" && minutoSegundo === "9") {
        minutoPrimeiro = " nove minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "0") {
        minutoPrimeiro = " dez";
        minutoSegundo = " minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "1") {
        minutoPrimeiro = " onze minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "2") {
        minutoPrimeiro = " doze minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "3") {
        minutoPrimeiro = " treze minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "4") {
        minutoPrimeiro = " quatorze minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "5") {
        minutoPrimeiro = " quinze minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "6") {
        minutoPrimeiro = " dezesseis minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "7") {
        minutoPrimeiro = " dezessete minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "8") {
        minutoPrimeiro = " dezoito minutos";
    } else if (minutoPrimeiro === "1" && minutoSegundo === "9") {
        minutoPrimeiro = " dezenove minutos";
    } else if (minutoPrimeiro === "2" && minutoSegundo === "0") {
        minutoPrimeiro = " vinte";
        minutoSegundo = " minutos";
    } else if (minutoPrimeiro === "3" && minutoSegundo === "0") {
        minutoPrimeiro = " trinta";
        minutoSegundo = " minutos";
    } else if (minutoPrimeiro === "4" && minutoSegundo === "0") {
        minutoPrimeiro = " quarenta";
        minutoSegundo = " minutos";
    } else if (minutoPrimeiro === "5" && minutoSegundo === "0") {
        minutoPrimeiro = " cinquenta";
        minutoSegundo = " minutos";
    } else if (minutoSegundo === "1") {
        minutoSegundo = " e um minuto"; 
    } else if (minutoSegundo === "2") {
        minutoSegundo = " e dois minutos"; 
    } else if (minutoSegundo === "3") {
        minutoSegundo = " e três minutos"; 
    } else if (minutoSegundo === "4") {
        minutoSegundo = " e quatro minutos"; 
    } else if (minutoSegundo === "5") {
        minutoSegundo = " e cinco minutos"; 
    } else if (minutoSegundo === "6") {
        minutoSegundo = " e seis minutos"; 
    } else if (minutoSegundo === "7") {
        minutoSegundo = " e sete minutos"; 
    } else if (minutoSegundo === "8") {
        minutoSegundo = " e oito minutos"; 
    } else if (minutoSegundo === "9") {
        minutoSegundo = " e nove minutos"; 
    }

    if (segundoPrimeiro === "0" && seundoSegundo === "0") {
        segundoPrimeiro = "";
        seundoSegundo = "";
    } else if (segundoPrimeiro === "0" && seundoSegundo === "1") {
        segundoPrimeiro = "";
        seundoSegundo = " e um segundo"
    } else if (segundoPrimeiro === "0" && seundoSegundo === "2") {
        segundoPrimeiro = "";
        seundoSegundo = " e dois segundos"
    } else if (segundoPrimeiro === "0" && seundoSegundo === "3") {
        segundoPrimeiro = " e treze segundos";
    } else if (segundoPrimeiro === "0" && seundoSegundo === "4") {
        segundoPrimeiro = " e quatro segundos";
    } else if (segundoPrimeiro === "0" && seundoSegundo === "5") {
        segundoPrimeiro = " e cinco segundos";
    } else if (segundoPrimeiro === "0" && seundoSegundo === "6") {
        segundoPrimeiro = " e seis segundos";
    } else if (segundoPrimeiro === "0" && seundoSegundo === "7") {
        segundoPrimeiro = " e sete segundos";
    } else if (segundoPrimeiro === "0" && seundoSegundo === "8") {
        segundoPrimeiro = " e oito segundos";
    } else if (segundoPrimeiro === "0" && seundoSegundo === "9") {
        segundoPrimeiro = " e nove segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "0") {
        segundoPrimeiro = " e dez segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "1") {
        segundoPrimeiro = " e onze segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "2") {
        segundoPrimeiro = " e doze segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "3") {
        segundoPrimeiro = " e treze segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "4") {
        segundoPrimeiro = " e quatorze segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "5") {
        segundoPrimeiro = " e quinze segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "6") {
        segundoPrimeiro = " e dezesseis segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "7") {
        segundoPrimeiro = " e dezessete segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "8") {
        segundoPrimeiro = " e dezoito segundos";
    } else if (segundoPrimeiro === "1" && seundoSegundo === "9") {
        segundoPrimeiro = " e dezenove segundos";
    }
}
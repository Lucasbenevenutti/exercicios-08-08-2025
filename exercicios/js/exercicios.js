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

    if (numero % 2 === 0 ) {
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
        alert("Numero maior: " + numero2 );
    } else {
        alert("Os numeros sao iguais");
    }
}

function exercicio28() {
    
}
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

function exercicio05(){
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

function exercicio06(){
    let nota01 = parseFloat(prompt("Digite a primeira nota"));
    let nota02 = parseFloat(prompt("Digite a segunda nota"));
    let nota03 = parseFloat(prompt("Digite a terceira nota"));

    let media = (nota01 + nota02 + nota03) / 3;

    console.log("A media das notas é: " + media);
}

function exercicio07(){
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

function exercicio08(){
    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em celsius"));
    let fahrenheit = temperaturaCelsius * (9/5) + 32;

    alert("A temperatura em Fahrenheit é de: " + fahrenheit + "°F");
}

function exercicio09(){
    let numero01 = parseInt(prompt("Digite o primeiro numero"));
    let numero02 = parseInt(prompt("Digite o segundo numero"));

    let soma = numero01 + numero02;
    let produto = numero01 * numero02;

    console.log("A soma é " + soma + "\nO produto é " + produto);
}

function exercicio10(){
    let primeiro 
}
const prompt = require("prompt-sync")({ sigint: false });

// Funções para as operações
function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

// Função auxiliar para ler um número válido
function lerNumero(mensagem) {
  while (true) {
    let entrada = prompt(mensagem);
    let numero = parseFloat(entrada);

    if (!isNaN(numero)) {
      return numero; // número válido
    } else {
      console.log("Caractere inválido! Digite apenas números.");
    }
  }
}

// Loop principal
function calculadora() {
  let continuar = true;

  while (continuar) {
    console.log("\nCalculadora Simples");
    console.log("Escolha a operação:");
    console.log("Soma (+)");
    console.log("Subtração (-)");
    console.log("Multiplicação (*)");
    console.log("Divisão (/)");
    console.log("Sair (sair)");

    let opcao = prompt("Digite a operação desejada (+, -, *, / ou sair): ");

    // Verifica se quer sair
    if (opcao === "sair") {
      console.log("Encerrando a calculadora. Tchau, tchau!");
      continuar = false;
      break;
    }

    // Valida a operação digitada
    if (opcao !== "+" && opcao !== "-" && opcao !== "*" && opcao !== "/") {
      console.log(
        "Caractere inválido! Use apenas as opções mencionadas (+, -, *, / ou sair)."
      );
      continue; // volta para o início do laço
    }

    // Lê os números com validação
    let num1 = lerNumero("Digite o primeiro número: ");
    let num2 = lerNumero("Digite o segundo número: ");

    let resultado;
    if (opcao === "+") {
      resultado = somar(num1, num2);
    } else if (opcao === "-") {
      resultado = subtrair(num1, num2);
    } else if (opcao === "*") {
      resultado = multiplicar(num1, num2);
    } else if (opcao === "/") {
      resultado = dividir(num1, num2);
    }

    console.log(`Resultado: ${resultado}`);
  }
}

calculadora();

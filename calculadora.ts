// Interface Strategy
interface Strategy {
    execute(a: number, b: number): number;
  }
  
  // Classe concreta para a estratégia de Soma
  class SomaStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a + b;
    }
  }
  
  // Classe concreta para a estratégia de Subtração
  class SubtracaoStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a - b;
    }
  }
  
  // Classe concreta para a estratégia de Multiplicação
  class MultiplicacaoStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a * b;
    }
  }
  
  // Contexto que utilizará a estratégia selecionada
  class Calculadora {
    private strategy: Strategy | undefined;
  
    setStrategy(strategy: Strategy): void {
      this.strategy = strategy;
    }
  
    executarOperacao(a: number, b: number): number {
      if (!this.strategy) {
        throw new Error("Estratégia não definida.");
      }
      return this.strategy.execute(a, b);
    }
  }
  
  // Utilização da calculadora com o padrão Strategy
  const calculadora = new Calculadora();
  const soma = new SomaStrategy();
  const subtracao = new SubtracaoStrategy();
  const multiplicacao = new MultiplicacaoStrategy();
  
  // Definindo a estratégia com base na operação informada pelo usuário
  const operacaoSelecionada: string = "multiplicacao"; // Substitua por operação desejada (soma, subtracao, multiplicacao)
  
  switch (operacaoSelecionada) {
    case "soma":
      calculadora.setStrategy(soma);
      break;
    case "subtracao":
      calculadora.setStrategy(subtracao);
      break;
    case "multiplicacao":
      calculadora.setStrategy(multiplicacao);
      break;
    default:
      throw new Error("Operação inválida.");
  }
  
  const primeiroValor: number = 10; // Substitua pelos valores desejados
  const segundoValor: number = 5; // Substitua pelos valores desejados
  
  const resultado = calculadora.executarOperacao(primeiroValor, segundoValor);
  console.log(`O resultado da operação é: ${resultado}`);
  
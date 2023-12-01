// Interface para Sanduíche
interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
  }
  
  // Implementação base do sanduíche (Frango Assado)
  class FrangoAssado implements Sanduiche {
    getDescricao(): string {
      return "Frango Assado";
    }
  
    getCusto(): number {
      return 4.5;
    }
  }
  
  // Decorator para adicionar ingredientes extras
  abstract class IngredienteExtra implements Sanduiche {
    constructor(private sanduiche: Sanduiche) {}
  
    getDescricao(): string {
      return this.sanduiche.getDescricao();
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto();
    }
  }
  
  // Classe Pepperoni que estende IngredienteExtra
  class Pepperoni extends IngredienteExtra {
    getDescricao(): string {
      return `${this.sanduiche.getDescricao()}, Pepperoni`;
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 0.99;
    }
  }
  
  // Classe QueijoMussarelaRalado que estende IngredienteExtra
  class QueijoMussarelaRalado extends IngredienteExtra {
    getDescricao(): string {
      return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }
  
    getCusto(): number {
      return this.sanduiche.getCusto() + 2.0;
    }
  }
  
  // Utilização do Decorator para criar o sanduíche desejado
  let meuSanduiche: Sanduiche = new FrangoAssado();
  meuSanduiche = new Pepperoni(meuSanduiche);
  meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);
  
  // Imprimir descrição e custo do sanduíche no console
  console.log(`${meuSanduiche.getDescricao()} custa $${meuSanduiche.getCusto().toFixed(2)}.`);
  
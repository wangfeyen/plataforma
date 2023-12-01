// Classe abstrata Veículo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      return new Veiculo(this.modelo, this.marca, this.cor, this.numeroRodas);
    }
  
    represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
  }
  
  // Subclasse Carro
  class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    clone() {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent() {
      return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto
  class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
    }
  
    clone() {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
  
    represent() {
      return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    criarVeiculos() {
      const veiculos = [];
      // Criando três instâncias de Carro e três instâncias de Moto
      const carro1 = new Carro('Sedan', 'Toyota', 'Preto', 4, 4);
      const carro2 = new Carro('Hatchback', 'Honda', 'Branco', 4, 5);
      const carro3 = new Carro('SUV', 'Ford', 'Prata', 4, 5);
  
      const moto1 = new Moto('Esportiva', 'Yamaha', 'Azul', 2, '600cc');
      const moto2 = new Moto('Custom', 'Harley-Davidson', 'Vermelha', 2, '1200cc');
      const moto3 = new Moto('Trail', 'BMW', 'Verde', 2, '800cc');
  
      // Adicionando ao array de veículos
      veiculos.push(carro1, carro2, carro3, moto1, moto2, moto3);
      return veiculos;
    }
  
    cloneVeiculos(veiculos) {
      const clones = [];
      // Clonando os veículos e adicionando ao novo array
      veiculos.forEach(veiculo => {
        clones.push(veiculo.clone());
      });
      return clones;
    }
  
    imprimirRepresentacao(veiculos) {
      veiculos.forEach(veiculo => {
        console.log(veiculo.represent());
      });
    }
  }
  
  // Utilização da aplicação
  const app = new Aplicacao();
  const veiculos = app.criarVeiculos();
  const clonesVeiculos = app.cloneVeiculos(veiculos);
  app.imprimirRepresentacao(clonesVeiculos);
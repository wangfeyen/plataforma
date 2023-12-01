class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSuperSecreta";
  
    private constructor() {}
  
    static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta.");
      } else {
        console.log("Acesso negado. Senha incorreta.");
      }
    }
  }
  
  // Programa principal para demonstrar o uso do Singleton SistemaSeguranca
  const agenteSecreto = SistemaSeguranca.getInstance();
  
  // Agente tentando acessar a Base Secreta com a senha correta
  agenteSecreto.acessarBaseSecreta("senhaSuperSecreta");
  
  // Agente tentando acessar a Base Secreta com senha incorreta
  agenteSecreto.acessarBaseSecreta("senhaErrada");
  
  // Tentativa de criar uma nova instância (não deve ser possível)
  const novoSistemaSeguranca = SistemaSeguranca.getInstance();
  console.log(agenteSecreto === novoSistemaSeguranca); // Deve imprimir true, indicando a mesma instância
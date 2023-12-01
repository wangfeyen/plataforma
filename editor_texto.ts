// Classe Observer
interface Observer {
    update(eventType: string, data: any): void;
  }
  
  // Classe Subject
  class Subject {
    private observers: Observer[] = [];
  
    attach(observer: Observer): void {
      this.observers.push(observer);
    }
  
    notify(eventType: string, data: any): void {
      this.observers.forEach(observer => {
        observer.update(eventType, data);
      });
    }
  }
  
  // Classe Editor como Subject
  class Editor extends Subject {
    open(): void {
      console.log("Editor aberto");
      this.notify("open", null);
    }
  }
  
  // Subclasse TextEditor extendendo Editor
  class TextEditor extends Editor {
    private lines: string[] = [];
  
    insertLine(lineNumber: number, text: string): void {
      this.lines.splice(lineNumber - 1, 0, text); // Insere o texto na posição lineNumber
      this.notify("lineInserted", { lineNumber, text });
    }
  
    removeLine(lineNumber: number): void {
      this.lines.splice(lineNumber - 1, 1); // Remove o texto na posição lineNumber
      this.notify("lineRemoved", { lineNumber });
    }
  
    saveToFile(): void {
      console.log("Conteúdo salvo no arquivo:");
      console.log(this.lines.join("\n"));
    }
  }
  
  // Classe InputHandler como Observer
  class InputHandler implements Observer {
    private textEditor: TextEditor;
  
    constructor(textEditor: TextEditor) {
      this.textEditor = textEditor;
      this.textEditor.attach(this);
    }
  
    update(eventType: string, data: any): void {
      if (eventType === "open") {
        this.handleInput();
      }
    }
  
    handleInput(): void {
      console.log("Insira as linhas de texto (Digite 'EOF' para finalizar):");
  
      const readline = require("readline");
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
  
      rl.prompt();
  
      rl.on("line", (input: string) => {
        if (input.toUpperCase() === "EOF") {
          rl.close();
          this.textEditor.saveToFile();
        } else {
          this.textEditor.insertLine(this.textEditor.lines.length + 1, input);
        }
      });
    }
  }
  
  // Classe ConsoleDisplay como Observer
  class ConsoleDisplay implements Observer {
    update(eventType: string, data: any): void {
      if (eventType === "lineInserted") {
        console.log(`Nova linha inserida na posição ${data.lineNumber}: '${data.text}'`);
      } else if (eventType === "lineRemoved") {
        console.log(`Linha removida na posição ${data.lineNumber}`);
      }
    }
  }
  
  // Utilização do editor de texto
  const textEditor = new TextEditor();
  textEditor.open();
  
  const inputHandler = new InputHandler(textEditor);
  const consoleDisplay = new ConsoleDisplay();
  
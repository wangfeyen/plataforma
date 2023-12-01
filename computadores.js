// Interface comum para os produtos (Computadores)
interface Computer {
    String getRAM();
    String getHDD();
    String getCPU();
    String getType();
    String toString();
}

// Implementações concretas dos produtos (Computadores)
class PC implements Computer {
    private String ram;
    private String hdd;
    private String cpu;
    private String type;

    public PC(String ram, String hdd, String cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = "PC";
    }

    @Override
    public String getRAM() {
        return ram;
    }

    @Override
    public String getHDD() {
        return hdd;
    }

    @Override
    public String getCPU() {
        return cpu;
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public String toString() {
        return "PC - RAM: " + ram + ", HDD: " + hdd + ", CPU: " + cpu;
    }
}

class Server implements Computer {
    // Implementação semelhante à classe PC, mas com type "Server"
    // ...

    @Override
    public String toString() {
        return "Server - RAM: " + ram + ", HDD: " + hdd + ", CPU: " + cpu;
    }
}

// Interface comum para a fábrica
interface ComputerAbstractFactory {
    Computer createComputer();
}

// Implementações concretas da fábrica
class PCFactory implements ComputerAbstractFactory {
    private String ram;
    private String hdd;
    private String cpu;

    public PCFactory(String ram, String hdd, String cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    @Override
    public Computer createComputer() {
        return new PC(ram, hdd, cpu);
    }
}

class ServerFactory implements ComputerAbstractFactory {
    // Implementação semelhante à classe PCFactory, mas para servidores
    // ...
}

// Cliente que utiliza a fábrica para criar instâncias do tipo abstrato da interface
public class Client {
    public static void main(String[] args) {
        ComputerAbstractFactory pcFactory = new PCFactory("8GB", "500GB", "2.4GHz");
        Computer pc = pcFactory.createComputer();
        System.out.println(pc.toString());

        // Criação de um servidor usando uma fábrica de servidor
        // ComputerAbstractFactory serverFactory = new ServerFactory(...);
        // Computer server = serverFactory.createComputer();
        // System.out.println(server.toString());
    }
}
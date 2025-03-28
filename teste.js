class Jogo {
    constructor(nome, genero, tamanho) {
        this.nome = nome;
        this.genero = genero;
        this.tamanho = tamanho;
    }

    dizerNome() {
        console.log("O nome do seu jogo é: " +this.nome);
    
    };

    dizerGenero() {
        console.log("O genero do seu jogo é: " +this.genero);
    };

    dizerTamanho(){
        console.log("O tamanho do seu jogo é: " +this.tamanho);
    }
}

const teste = new Jogo("Katana_Zero", "Indie", "254mb")

teste.dizerNome();
teste.dizerGenero();
teste.dizerTamanho();


**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.+

CLASSE Veículo:
    ATRIBUTOS:
        modelo
        ano

    CONSTRUTOR(modelo, ano):
        esse.modelo <- modelo
        esse.ano <- ano

    METODO CALCULARCONSUMO:
        // Metodo genérico para ser sobreposto pelo método das outras classes filhas


CLASSE Carro HERDA Veículo:
    ATRIBUTOS:
        eficiencia // km por litro
 
    CONSTRUTOR(modelo, ano, eficiencia):
        CHAMAR CONSTRUTOR de Veículo(modelo, ano)
        esse.eficiencia <- eficiencia 

    METODO CALCULARCONSUMO:
        consumo <- distancia / eficiencia
        RETORNAR consumo

CLASSE Moto HERDA Veículo:
    ATRIBUTOS:
        eficiencia // km por litro

    CONSTRUTOR(modelo, ano, eficiencia):
        CHAMAR CONSTRUTOR DE Veículo(modelo, ano)
        esse.eficiencia <- eficiencia

    METODO CALCULARCONSUMO:
        consumo <- distancia / eficiencia
        RETORNAR consumo 
        

**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.
        
Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:
        
Considere a fórumla de atualização velocidade:
```
velocidade = velocidadeInicial - desaceleracao * tempo
```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.
CALCULARTEMPOPOUSO(velocidadeInicial, desaceleracao, velocidadeSegura, tempoMaximo, desaceleracaoMinima):
    SE desaceleracao <= desaceleracaoMinima ENTAO
        RETORNAR "Erro: desaceleração abaixo do limite mínimo permitido"
    
    tempo <- 0
    velocidadeAtual <- velocidadeInicial
    
    ENQUANTO velocidadeAtual > velocidadeSegura E tempo < tempoMaximo FAÇA:
        velocidadeAtual <- velocidadeAtual - desaceleracao
        tempo <- tempo + 1
    
    SE velocidadeAtual <= velocidadeSegura ENTAO
        RETORNAR tempo
    SENAO
        RETORNAR "Erro: Tempo máximo excedido, ajuste necessário"
FIM    



MULTIPLICARMATRIZES(matrizA, matrizB):  
    SE TAMANHO(matrizA[0]) ≠ TAMANHO(matrizB) ENTAO:  
        RETORNAR "As matrizes não podem ser multiplicadas. Dimensões incompatíveis."  
    
    linhasA <- TAMANHO(matrizA)  
    colunasA <- TAMANHO(matrizA[0])  
    colunasB <- TAMANHO(matrizB[0])  
    matrizResultado <- NOVAMATRIZ(linhasA, colunasB)  
    
    PARA i DE 0 ATE linhasA-1 FAÇA:  
        PARA j DE 0 ATE colunasB-1 FAÇA:  
            matrizResultado[i][j] <- 0  
              PARA k DE 0 ATE colunasA-1 FAÇA:  
                matrizResultado[i][j] <- matrizResultado[i][j] + (matrizA[i][k] * matrizB[k][j])  
    
    RETORNAR matrizResultado  

//Exemplo de uso da função  
investimentos <- [[1000, 2000], [1500, 2500]]  
fatoresImpacto <- [[1.1, 0.9], [0.8, 1.2]]  

resultadoFinanceiro <- MULTIPLICARMATRIZES(investimentos, fatoresImpacto)  
ESCREVER("Resultado financeiro após impacto dos fatores:")  
IMPRIMIRMATRIZ(resultadoFinanceiro)
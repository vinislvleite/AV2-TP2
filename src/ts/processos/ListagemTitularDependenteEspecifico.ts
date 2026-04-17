import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularPorDependente extends Processo {
    private impressor!: Impressor

    processar(): void {
        console.clear()

        let armazem = Armazem.InstanciaUnica

        let dependentes: Cliente[] = []

        armazem.Clientes.forEach(cliente => {
            cliente.Dependentes.forEach(dep => {
                dependentes.push(dep)
            })
        })

        if (dependentes.length === 0) {
            console.log("Não há dependentes cadastrados")
            return
        }

        console.log("Dependentes:")
        dependentes.forEach((d, i) => {
            console.log(`${i + 1} - ${d.Nome}`)
        })

        let indice = this.entrada.receberNumero("Escolha o dependente:")

        if (indice < 1 || indice > dependentes.length) {
            console.log("Opção inválida")
            return
        }

        let dependente = dependentes[indice - 1]

        console.log("Titular do dependente:")

        this.impressor = new ImpressaorCliente(dependente.Titular)
        console.log(this.impressor.imprimir())
    }
}
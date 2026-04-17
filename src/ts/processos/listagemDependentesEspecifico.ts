import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";

export default class ListagemDependentes extends Processo {
    private impressor!: Impressor

    processar(): void {
        console.clear()

        let armazem = Armazem.InstanciaUnica

        let nomeTitular = this.entrada.receberTexto("Nome do titular:")
        let titular = armazem.Clientes.find(c => c.Nome === nomeTitular)

        if (!titular) {
            console.log("Titular não encontrado")
            return
        }

        console.log(`Dependentes de ${titular.Nome}:`)

        if (titular.Dependentes.length === 0) {
            console.log("Esse cliente não possui dependentes")
            return
        }

        titular.Dependentes.forEach(dep => {
            this.impressor = new ImpressaorCliente(dep)
            console.log(this.impressor.imprimir())
        })
    }
}
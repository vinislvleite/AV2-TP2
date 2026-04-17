import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class excluirClienteDependente extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica

        let nomeTitular = this.entrada.receberTexto("Nome do titular:")
        let index = armazem.Clientes.findIndex(c => c.Nome === nomeTitular)

        if (index === -1) {
            console.log("Titular não encontrado")
            return
        }

        armazem.Clientes.splice(index,1)

        let confirmacao = this.entrada.receberTexto("Tem certeza? (S/N)")

        if (confirmacao.toUpperCase() !== "S") {
            return
        }
    }
}
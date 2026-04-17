import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class cadastrarClienteDependente extends Processo {
        processar(): void {
    let armazem = Armazem.InstanciaUnica

    let nomeTitular = this.entrada.receberTexto("Nome do titular:")
    let titular = armazem.Clientes.find(c => c.Nome === nomeTitular)

    if (!titular) {
        console.log("Titular não encontrado")
        return
    }

    let nome = this.entrada.receberTexto("Nome do dependente:")
    let nomeSocial = this.entrada.receberTexto("Nome social:")
    let data = this.entrada.receberData("Data nascimento:")

    let dependente = new Cliente(nome, nomeSocial, data)
    titular.adicionarDependente(dependente)

    console.log("Dependente cadastrado com sucesso!")
    }
}
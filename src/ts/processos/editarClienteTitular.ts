import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class editarClienteTitular extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica

        let nomeCliente = this.entrada.receberTexto("Qual nome do cliente que vc deseja atualizar os dados?")
        let cliente = armazem.Clientes.find(c => c.Nome === nomeCliente)

        if (!cliente) {
            console.log("Cliente não encontrado")
            return
        }

        let novoNome = this.entrada.receberTexto("Novo nome do cliente:")
        if (novoNome) cliente.Nome = novoNome

        let novoNomeSocial = this.entrada.receberTexto("Novo nome social do cliente:")
        if (novoNomeSocial) cliente.NomeSocial = novoNomeSocial

        let novaDataNascimento = this.entrada.receberData("Nova data de nascimento do cliente:\n Use DD/MM/AAAA")
        if (novaDataNascimento) cliente.DataNascimento = novaDataNascimento

        console.log('Atualizando o cadastro do cliente...')
    }
}
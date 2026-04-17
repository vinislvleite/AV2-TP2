import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class editarClienteDependente extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica

        let nomeTitular = this.entrada.receberTexto("Nome do titular:")
        let titular = armazem.Clientes.find(c => c.Nome === nomeTitular)

        if (!titular) {
            console.log("Titular não encontrado")
            return
        }

        let nomeDependente = this.entrada.receberTexto("Nome do dependente:")
        let dependente = titular.Dependentes.find(d => d.Nome === nomeDependente)

        if (!dependente) {
            console.log("Dependente não encontrado")
            return
        }

        let novoNome = this.entrada.receberTexto("Novo nome:")
        if (novoNome) dependente.Nome = novoNome

        let novoNomeSocial = this.entrada.receberTexto("Novo nome social:")
        if (novoNomeSocial) dependente.NomeSocial = novoNomeSocial

        let novaDataNascimento = this.entrada.receberData("Nova data de nascimento:")
        if (novaDataNascimento) dependente.DataNascimento = novaDataNascimento

        console.log("Dependente atualizado com sucesso!")
    }
}
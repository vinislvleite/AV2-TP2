import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

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

        this.processo = new CadastroEnderecoTitular(dependente)
        this.processo.processar()
        
        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        let ddd = this.entrada.receberTexto("DDD:")
        let numero = this.entrada.receberTexto("Número de telefone:")
        
        let telefone = new Telefone(ddd,numero)
        dependente.Telefones.push(telefone)

        console.log("Dependente cadastrado com sucesso!")
    }
}
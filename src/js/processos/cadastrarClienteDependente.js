"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const cliente_1 = __importDefault(require("../modelos/cliente"));
class cadastrarClienteDependente extends processo_1.default {
    processar() {
        let armazem = armazem_1.default.InstanciaUnica;
        let nomeTitular = this.entrada.receberTexto("Nome do titular:");
        let titular = armazem.Clientes.find(c => c.Nome === nomeTitular);
        if (!titular) {
            console.log("Titular não encontrado");
            return;
        }
        let nome = this.entrada.receberTexto("Nome do dependente:");
        let nomeSocial = this.entrada.receberTexto("Nome social:");
        let data = this.entrada.receberData("Data nascimento:");
        let dependente = new cliente_1.default(nome, nomeSocial, data);
        titular.adicionarDependente(dependente);
        console.log("Dependente cadastrado com sucesso!");
    }
}
exports.default = cadastrarClienteDependente;

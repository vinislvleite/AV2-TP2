"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Entrada {
    receberNumero(mensagem) {
        let valor = prompt(`${mensagem} `);
        return Number(valor);
    }
    receberTexto(mensagem) {
        let texto = prompt(`${mensagem} `);
        return texto;
    }
    receberData(mensagem) {
        let texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: `);
        let partes = texto.split('/');
        let dia = Number(partes[0]);
        let mes = Number(partes[1]);
        let ano = Number(partes[2]);
        return new Date(ano, mes - 1, dia);
    }
}
exports.default = Entrada;

import { RegioesProblemasApiModel } from "./regioes-problemas-api-model";

export interface RegioesApiModel {
  cidade: string,
  id: number,
  imagem: string,
  problemas: RegioesProblemasApiModel[],
  regiao: string
}

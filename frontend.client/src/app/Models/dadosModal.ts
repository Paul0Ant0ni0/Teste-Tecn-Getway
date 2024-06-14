import { Produto } from "./produtos";

export interface DadosModal {
  produto: Produto | undefined;
  cadastrar?: (produto: Produto) => {};
  editar?: (produto: Produto) => {};
}

import { CategoriaEnum } from "../Enums/CategoriaEnums";
import { StatusEnum } from "../Enums/StatusEnums";

export interface Produto{
  id?: number;
  nome: string;
  quantidade: number;
  preco: number;
  descricao: string;
  categoria: CategoriaEnum;
  status: StatusEnum;
  imagemUrl?: string;
  dataDeCriacao?: Date;
  dataDeAlteracao?: Date;
}

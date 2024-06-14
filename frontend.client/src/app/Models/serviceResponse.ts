import { Produto } from "./produtos";

export interface ServiceResponse {
  dados?: Produto | Produto[] | null;            
  mensagem: string;       
  sucesso: boolean;      
  statusCode?: number;    
  data: Date;             
}

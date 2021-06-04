export class Venda {
  // tslint:disable-next-line: variable-name
  _id!: string;
  id_cliente!: string | undefined;
  id_funcionario!: string | undefined;
  id_produto!: string;
  preco!: number | undefined;
  cardNumber!: string;
  cardHolder!: string;
  expirationMonth!: string;
  expirationYear!: string;
  ccv!: number;
}

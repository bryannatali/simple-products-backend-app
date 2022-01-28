// Desafio Criar Classe do Produto
// Dica: Pesquisar como criar classes com Typescript

export class Product {
  public id!: number

  public name!: string

  public description!: string

  public price!: number

  constructor(props: Product) {
    Object.assign(this, props)
  }
}
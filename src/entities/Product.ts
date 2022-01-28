// Desafio Criar Classe do Produto
// Dica: Pesquisar como criar classes com Typescript

export class Product {
  name: string
  description: string
  price: number

  constructor(n:string, d:string, p:number) {
    this.name = n
    this.description = d
    this.price = p
  }
}
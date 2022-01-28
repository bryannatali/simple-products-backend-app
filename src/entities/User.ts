export class User {
  public id!: number

  public username!: string

  public password!: string

  public name!: string

  constructor(props: User) {
    Object.assign(this, props)
  }
}
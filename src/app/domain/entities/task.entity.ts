export class Task {
  public id: number
  public title: string
  public completed: boolean

  constructor(id: number, title: string, completed: boolean) {
    this.id = id
    this.title = title
    this.completed = completed
  }
}

export class Todo {

  constructor(
    public title: string,
    public isDone: boolean = false,
    public isDelete: boolean = false,
    public time: Date = new Date()
  ) {}
}

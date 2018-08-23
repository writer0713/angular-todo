export class Todo {
  constructor(
    public title: string,
    public completed: boolean = false,
    public isDelete: boolean = false,
    public time: Date = new Date()
  ) {}
}

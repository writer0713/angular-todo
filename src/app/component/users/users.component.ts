import { UserService } from "../../service/user.service";
import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  title = "PEOPLE";

  public users: User[];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.initUsers();
  }

  private initUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}

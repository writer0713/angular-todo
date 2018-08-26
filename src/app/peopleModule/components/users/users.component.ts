import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { UserService } from "../../services/user.service";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  title = "PEOPLE";

  @select(s => s.user.users)
  users;

  constructor(public userService: UserService) {
    console.log("users Component");
    this.userService.initUsers();
  }

  ngOnInit() {}
}

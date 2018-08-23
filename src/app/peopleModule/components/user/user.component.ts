import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../model/user";

@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input("user")
  user: User;

  constructor() {}

  ngOnInit() {}

  public getProfileImage() {
    return `https://randomuser.me/api/portraits/women/${this.user.id}.jpg`;
  }
}

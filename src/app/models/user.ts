import { Level } from "./level";

export class User {

  username: string;
  profilePic: string;
  email: string;
  password: string;
  levels: Level[];

  constructor(username: string, profilePic: string, email: string, password: string, levels: Level[]) {
    this.username = username;
    this.profilePic = profilePic;
    this.email = email;
    this.password = password;
    this.levels = levels;
  }

}

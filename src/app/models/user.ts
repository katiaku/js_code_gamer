import { Level } from "./level";

export class User {

  nickname: string;
  email: string;
  password: string;
  levels: Level[];

  constructor(nickname: string, email: string, password: string, levels: Level[]) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.levels = levels;
  }

}

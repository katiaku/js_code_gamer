export class User {

  name_surname: string;
  email: string;
  username: string;
  photo: string;
  password: string;

  constructor(name_surname: string, email: string, username: string, photo: string, password: string) {
    this.name_surname = name_surname;
    this.email = email;
    this.username = username;
    this.photo = photo;
    this.password = password;
  }

}

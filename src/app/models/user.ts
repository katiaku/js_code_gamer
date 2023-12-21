export class User {

  iduser: number;
  name_surname: string;
  email: string;
  username: string;
  photo: string;
  password: string;

  constructor(iduser: number, name_surname: string, email: string, username: string, photo: string, password: string) {
    this.iduser = iduser;
    this.name_surname = name_surname;
    this.email = email;
    this.username = username;
    this.photo = photo;
    this.password = password;
  }

}

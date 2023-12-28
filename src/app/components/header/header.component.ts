import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isUserLogged: boolean;

  constructor(private apiService: UsersService, private router: Router) {}

  ngOnInit() {
    this.apiService.loggedIn.subscribe((loggedIn) => {
      this.isUserLogged = loggedIn;
    });
  }

}

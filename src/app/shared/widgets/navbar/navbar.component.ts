import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/impl/auth.service';
import {UserService} from '../../../services/impl/user.service';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: string;
  greeting: string;

  constructor(private authService: AuthService, private userClient: UserService) {


  }

  ngOnInit(): void {
    this.greetings();
    this.userClient.getUser().subscribe(pipe(i => {
      if (i['administrator'] != null) {
        this.user = i['administrator'];
      } else {
        this.user = i['name'];
      }
    }));
  }

  logout() {
    this.authService.logout();
  }

  greetings() {
    let d = new Date();
    d.getHours();
    if (d.getHours() > 12) {
      this.greeting = 'Buenas tardes';
    } else {
      this.greeting = 'Buenos días';
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UsersService) { }
   userData: any = null;
  ngOnInit()  {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(data => {
      this.userData=data;
      console.log(this.userData);
    });
  }

  logout(){
    this.userService.logout();
    console.log("Hasta luego " + this.userData.data.first_name);
  }

  canDeactivate() {
    return window.confirm("Are you sure?")
  }
}

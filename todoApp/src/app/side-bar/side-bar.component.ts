import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginText:string='Login';
  toggleLogin(){
     if(this.loginText==='Login'){
      this.loginText='Logout';
     }else{
      this.loginText='Login';
     }
  }

}

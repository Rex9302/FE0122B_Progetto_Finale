import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public showNav:boolean = false
  nome!:any;

  constructor(private authSrv:AuthService) {}

  ngOnInit(): void {
    this.checkLog()
    this.getNome()
  }

  logout(){
    this.authSrv.logout()
  }
  checkLog(){
    if(this.authSrv.isLogged == false){
      this.showNav = false
    }else {this.showNav = true}
  }
  getNome(){
    let user:any = localStorage.getItem('user')
    this.nome = JSON.parse(user)
  }

}

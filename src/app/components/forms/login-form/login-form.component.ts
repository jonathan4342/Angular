import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private authServices:AuthService) { }

  ngOnInit(): void {
    this.authServices.login('eve.holt@reqres.in','cityslicka').subscribe((data)=>{
      console.log(data)
    },
    (error)=>{
      console.log(error)
    },
    ()  =>{
      console.log('complete')
    }
    )
  }

}

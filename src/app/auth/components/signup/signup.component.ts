import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  logged:boolean = false
  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.log()
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.form.controls['username'].setValue('');
    this.form.controls['email'].setValue('');
    this.form.controls['password'].setValue('');
  }
  onSubmit(DatiForm: { value: User }) {
    const ruoli = Array();
    ruoli.push(this.form.value.role);
    this.form.value.role = ruoli;

    this.authSrv.signup(DatiForm.value).subscribe(() => {
      if (this.authSrv.isLogged == false) {
        this.router.navigate(['/login']);
      }
      this.form.controls['username'].setValue('');
      this.form.controls['email'].setValue('');
      this.form.controls['password'].setValue('');
      this.snackBar.open('Utente registrato', 'Chiudi', {
        duration:3000
      })
    });
  }
  log(){
    if(this.authSrv.isLogged){
      this.logged = true
    }
  }
}

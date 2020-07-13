import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: User[];
  msgs: Message[] = [];


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onClick() {
    this.login();
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.userService.getUsers().forEach(user => {
      if (user.username === username && user.password === password) {
        this.userService.loggedInUserSubject.next(user.username);
        this.router.navigate(['dashboard']);
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', summary: 'Error: ', detail: 'Incorrect username or password!'});
        this.loginForm.reset();
      }
    });
  }
}

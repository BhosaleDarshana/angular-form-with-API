import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false;

  registerUser = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  registerUserData(){
    console.log(this.registerUser.value);
    this.resto.registerUserService(this.registerUser.value).subscribe((data)=>{
      console.log(data)
      this.alert=true;
    })
  }

  closeAlert(){
    this.alert=false;
  }

}

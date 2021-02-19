import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert=false;

  constructor(private restoServ:RestoService) { }
  public addResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email: new FormControl('')
  })
  ngOnInit(): void {
  }

  getAddRestro(){
    //console.log(this.addResto.value);
    this.restoServ.saveRestro(this.addResto.value).subscribe((data)=>{
      console.log(data);
      this.alert=true;
    })
    this.addResto.reset({})
  }

  closeAlert(){
    this.alert=false
  }
}
 
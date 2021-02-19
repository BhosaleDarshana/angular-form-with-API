import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {RestoService} from '../resto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  constructor(private restoServ:RestoService, private Aroute:ActivatedRoute) { }

  public editResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email: new FormControl('')
  })

  ngOnInit(): void {
    console.log(this.Aroute.snapshot.params.id)
    this.restoServ.getCurrentRestro(this.Aroute.snapshot.params.id).subscribe((result)=>{
      //console.log(result)
      this.editResto=new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        email: new FormControl(result['email'])
      })
      console.log(result)
    })
  }
 

  getUpdateRestro(){
    //console.log(this.addResto.value);
    this.restoServ.updateRestro(this.Aroute.snapshot.params.id,this.editResto.value).subscribe((data)=>{
      console.log(data);
      this.alert=true;
    })
    this.editResto.reset({})
  }

  closeAlert(){
    this.alert=false;
  }

}

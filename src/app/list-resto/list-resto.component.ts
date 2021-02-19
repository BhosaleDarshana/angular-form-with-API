import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  collection:any=[];

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
    //console.log(this.resto.getList())
    this.resto.getList().subscribe((result)=>{
      console.log(result);
      this.collection=result;
    })
  }

  deleteRestro(item){
    //console.log(item);
    console.log(this.collection);
    this.collection.splice(item-1,1)
    
    this.resto.deleteRestro(item).subscribe((data)=>{
      console.log(data)
    })
  }

}

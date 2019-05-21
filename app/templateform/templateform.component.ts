import { Component } from '@angular/core';
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent  {
public fname:string="";
public lname:string="";
public city:string="";
public email:string="";
public pincode:number;
public f1():void{

	alert("Customer Details Are Inserted");
}
  
}

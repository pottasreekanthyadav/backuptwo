import { Component } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent  {

  public sname="SAI";
  public gender:string="M";
  public users:any[]=[{uname:"sai",gender:"M"},
   {uname:"Hari",gender:"F"},{uname:"kalyan",gender:'m'},{uname:"hari",gender:"f"}
];
//Empoolyy Range Filter//
public min:number=1000;
public max:number=3100;
public emp:any[]=[{ename:"sai",salary:2000},{ename:"hari",salary:6000},{ename:"hari3",salary:1000},
{ename:"Hari4",salary:1500},{ename:"Hari5",salary:1600},{ename:"hari6",salary:2000},{ename:"hari6"
,salary:2500},{ename:"hari7",salary:3000},{ename:"hari8",salary:3500}



];




}

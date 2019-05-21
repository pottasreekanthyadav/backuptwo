import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {


public s1:Student={sid:1000,sname:"ayyappa",course:"Angular6"};
public ename:string[]=["sai","ayyappa","manoj","laks"];
public HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];
  constructor() {
this.s1.sname="Arran";

   }

  ngOnInit() {
  }

}
class Student{
	public sid:number=0;
	public sname:string="";
	public course:string=""; 

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {



public ar:Student[]=[{sname:"sai",course:"Html"},{sname:'hari',course:'Angular6'}]
  constructor() { }

  ngOnInit() {
  }

}
class Student{
	public sname:string="";
	public course:string="";
}

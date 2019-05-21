import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
	public s1: string = "";
	public s2: string = "";
	public students:Student[]=[{sname:"scott",course:"Angular"},{sname:"sai",course:"jquery"}];
  
public f1():void{
	var ob=new Student();
	ob.sname=this.s1;
	ob.course=this.s2;
	this.students.push(ob);
	this.s1="";
	this.s2="";
}
public f2(n){
		this.students.splice(n,1);

}
public f3(){
var ob=this.s1;
for(var i=0;i<this.students.length;i++){
	if(this.students[i].sname==ob){
		this.students.splice(i,1);
	}

}
}
public index:number;
public f4(n){
	
	this.s1=this.students[n].sname;
	this.s2=this.students[n].course;
	this.index=n;
	
}
public  f5(){
	var po=this.index;
	for(var i=0 ;i<=this.students.length;i++){
if(po==i){
	this.students[i].sname=this.s1;
	this.students[i].course=this.s2;
}

	}

}
}

class Student{
	public sname:string="";
	public course:string="";
}

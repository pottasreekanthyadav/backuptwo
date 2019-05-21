import { Component} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
public sid:number=5000;
public sname:string="sai";
public course:string="angular";
public email:string="Sai@gmail.com";
public joindata:Date=new Date();
public fee:number=35000;
public n:number=5;
  
  public students:Student[]=[{sname:"sai-0",city:"Hyd"},
  {sname:"sai-1",city:"Hyd"},
  {sname:"sai-2",city:"Hyd"},
  {sname:"sai-3",city:"Hyd"},
  {sname:"sai-4",city:"Hyd"},
  {sname:"sai-5",city:"Hyd"},
  {sname:"sai-6",city:"Hyd"},
  {sname:"sai-7",city:"Hyd"},
  {sname:"sai-8",city:"Hyd"},
  {sname:"sai-9",city:"Hyd"},
  {sname:"sai-10",city:"Hyd"},
  {sname:"sai-11",city:"Hyd"},
  {sname:"sai-12",city:"Hyd"},
  {sname:"sai-13",city:"Hyd"},
  {sname:"sai-14",city:"Hyd"},
  {sname:"sai-15",city:"Hyd"},
  {sname:"sai-16",city:"Hyd"},
  {sname:"sai-17",city:"Hyd"},
  {sname:"sai-18",city:"Hyd"},
  {sname:"sai-19",city:"pune"},
  {sname:"sai-20",city:"bang"},






  ] ;

public x:number=0;
public y:number=5;
  public f1(n):void{
  	alert(n);
  	
  	if(this.y<=this.students.length){

  	this.x=this.x+5;
  	this.y=this.y+5;
  		
  	}

	else{
		this.x=0;
  		this.y=5;
}

}
}

class Student{
	public sname:string="";
	public city:string="";
}

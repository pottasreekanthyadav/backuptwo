import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-curd',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class CurdComponent {

public s1:string;
public s2:string;
public s3:string;
public s4:string;
public ar:any[];

  constructor(private httpObj:HttpClient) { }


//Read All Items
public f1():void{
	var a2=this;
	let url:string="http://localhost:3000/dep";
	this.httpObj.get(url).subscribe(function(data:any){
		a2.ar=data;
		console.log(a2.ar);

	})
}

public  f2()
{

	let url:string="http://localhost:3000/dep";

	var depob:any={};
	depob.depno=this.s1;
	depob.name=this.s2;
	depob.age=this.s3;
	depob.Loc=this.s4;
	var a2=this;
	this.httpObj.post(url,depob).subscribe(function(data:any){
		
		a2.f1();

	})

}



public f3(dno:number):void{
	let url:string="http://localhost:3000/dep/"+dno;

	var a2=this;
	this.httpObj.delete(url).subscribe(function(data:any){
		a2.f1();
		
		

	})
}
public uid:number;
public f4(dno:number):void{
		let url:string="http://localhost:3000/dep/"+dno;
		var a2=this;
		this.httpObj.get(url).subscribe(function(data:any){
		a2.s1=data.depno;
		a2.s2=data.name;
		a2.s3=data.age;
		a2.s4=data.Loc;
		
		

	});

this.uid=dno;

}

public f5():void{
	var dno=this.uid;
	
	let url:string="http://localhost:3000/dep/"+dno;
		var depob:any={};
	depob.depno=this.s1;
	depob.name=this.s2;
	depob.age=this.s3;
	depob.Loc=this.s4;
	console.log(depob);
	var a2=this;


	this.httpObj.put(url,depob).subscribe(function(data:any){
		
		a2.f1();

	})
		
}


public cus:any[]=[];
public wschool():void{



	let url:string="https://www.w3schools.com/angular/customers.php";
	var a2=this;
	
	this.httpObj.get(url).subscribe(function(data:any){
		a2.cus=data;
		
	})

	

}





}

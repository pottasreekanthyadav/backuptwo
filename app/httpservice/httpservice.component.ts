import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.css']
})
export class HttpserviceComponent  {
public ar:any[]=[];
  constructor(private httpobj:HttpClient) { }
public f1():void{
	let url:string="http://localhost:3000/dep";
	var a=this.httpobj.get(url);
	/*var a2=this;
	var a3=a.subscribe(function(data:any){
		console.log(data);
			a2.ar=data;
			console.log(a2.ar.length);
	});*/
	var b=a.subscribe((data:any)=>

{
console.log(data);
this.ar=data;

});


}



}



import { Component} from '@angular/core';
import{Loginservice} from './loginservice';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
   providers: [Loginservice]
})
export class ServicesComponent {

public s1:string;
public s2:string;
public res:string;
constructor(private obj:Loginservice){

}

public f1():void{
	this.res=this.obj.isvalid(this.s1,this.s2);
	
}


}

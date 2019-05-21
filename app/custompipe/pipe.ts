import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
   name:'genderpipe'
})
export class Demopipe implements PipeTransform{

  public transform(input:string):string{
let output="";
if(input.toUpperCase()=="M"){
	output="Male";
}

if(input.toUpperCase()=="F"){
	output="Female";
}



return output;
  }

}

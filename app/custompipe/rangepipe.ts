import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
   name:'range'
})
export class Rangepipe implements PipeTransform{

  public transform(input:any[],min:number,max:number):any[]{
  	var output:any[]=[];
  	for(var i=0;i<input.length;i++){
  	if(input[i].salary>min && input[i].salary<max)
{
	output.push(input[i]);
}

}
return output;
}
}
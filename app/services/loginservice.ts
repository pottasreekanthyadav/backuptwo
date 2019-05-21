import {Injectable} from "@angular/core";
@Injectable()
export class Loginservice{
	public isvalid(uid,passworrd):string{
		if(uid=="admin" && passworrd=="admin123"){
			return "Login Successfull";
		}

		else{
			return "Invalid UserName and Password";
		}
	}

	public test():string{
		return "sai ramaa"; 
	}
}
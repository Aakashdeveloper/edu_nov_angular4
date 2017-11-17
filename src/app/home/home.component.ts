import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=["NodeJs","AngularJs","ReactJs"];
  model= new Employee("edurek","angular",true,"male","NodeJs",0);
  hasCodeError=false;
  firstToUpper(value:string){
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.model.firstName = value
  }

  validateCode(event){
    if(this.model.codeLang == "default")
      this.hasCodeError=true;
    else
      this.hasCodeError=false;

  }
}


/*ng-untouched ng-pristine ng-valid
  ng-touched   ng-dirty    ng-invalid*/
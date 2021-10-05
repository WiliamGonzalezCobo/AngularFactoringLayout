import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})
export class RegisterBusinessComponent implements OnInit {

  buttonContinuar: any = {
    text: "Continuar",
    type: "default",
    icon: "icon-right-open",
    useSubmitBehavior: true
  }

  buttonRegresar: any = {
    text: "Regresar",
    type: "normal",
    icon: "icon-left-open",
    useSubmitBehavior: true
  }

  constructor() {}

  ngOnInit() {

  }

}




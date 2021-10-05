import { Component, OnInit } from '@angular/core';
import { Employee, Service, State} from 'src/app/services/app.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Service]
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }
  
  buttonConsultar = {
    text: "Consultar",
    icon:"fontello icon-search-solid",
    onClick: function () {
        // ...
    }
  }
    buttonComprar = {
      text: "Comprar",
      icon:"fontello icon-shopping-bag-solid",
      stylingMode: "contained",
      type: "default",
      width:"90%",
      onClick: function () {
          // ...
      }

}

  dataSource: Employee[];
    states: State[];
    events: Array<string> = [];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }
    
    logEvent(eventName) {
        this.events.unshift(eventName);
    }
  
    clearEvents() {
        this.events = [];
    }
 
}

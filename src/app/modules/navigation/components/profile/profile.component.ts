import { Component, OnInit } from '@angular/core';
import { PriorityEntity, ServiceRadio, Task, PriorityEntityRenta, PriorityEntityIca } from 'src/app/services/app.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ServiceRadio],
})
export class ProfileComponent implements OnInit {
  priorities: string[];
  priorityEntities: PriorityEntity[];

  prioritiesRenta: string[];
  priorityEntitiesRenta: PriorityEntityRenta[];

  prioritiesIca: string[];
  priorityEntitiesIca: PriorityEntityIca[];

  selectionPriorityId: number;
  colorPriority: string;
  tasks: Task[];
  currentData: string[] = [];


  constructor(service: ServiceRadio) {
    this.tasks = service.getTasks();
    this.priorities = [
        "Sí", 
        "No"
    ];
    this.priorityEntities = service.getPriorityEntities();


    this.prioritiesRenta = [
        "Declarante", 
        "No declarante"
    ];
    this.priorityEntitiesRenta = service.getPriorityEntities();

 
    this.prioritiesIca = [
        "Actividad gravada", 
        "Actividad no gravada"
    ];
    this.priorityEntitiesIca = service.getPriorityEntities();



    this.colorPriority = this.priorities[2];
    this.currentData[0] = this.tasks[1].subject;
    this.selectionPriorityId = this.priorityEntities[0].id;
}

 onValueChanged($event){
        this.currentData = [];
    
        this.tasks.forEach((item, index) => {
            if(item.priority == $event.value) {
                this.currentData.push(this.tasks[index].subject);
            }
        });    
    }


  ngOnInit() {
  }

  buttonModificar: any = {
    text: "Modificar",
    type: "default",
    icon: "fontello icon-pen-solid",
    useSubmitBehavior: true
  }


}



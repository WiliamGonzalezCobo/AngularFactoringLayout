import { Component, OnInit } from '@angular/core';
import { Tab, profileTabs } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [profileTabs]
})
export class ProfileComponent implements OnInit {
  tabs: Tab[];
  tabContent: string;

  constructor(service:profileTabs) { 
    this.tabs = service.getTabs();
    this.tabContent = this.tabs[0].content;
  }

  selectTab(e) {
    this.tabContent = this.tabs[e.itemIndex].content;
}

  ngOnInit() {
  }

}

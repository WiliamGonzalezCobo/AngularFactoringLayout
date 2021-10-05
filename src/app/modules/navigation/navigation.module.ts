import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import {    DxDataGridModule, 
            DxDateBoxModule, 
            DxFormModule, 
            DxSelectBoxModule,
            DxCheckBoxModule, 
            DxTabsModule,
            DxButtonModule,
            DxTextBoxModule,
            DxValidatorModule,
            DxTextAreaModule } from "devextreme-angular";
import { HomeComponent } from "./components/home/home.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NavigationRouting } from "./navigation.routing";







@NgModule({
    declarations: [
        HomeComponent,
        InvoiceComponent,
        ProfileComponent
    ],
    imports: [
		DxSelectBoxModule,
		DxTextAreaModule,
		DxDateBoxModule,
		DxFormModule,
        DxButtonModule,
        DxDataGridModule,
        DxCheckBoxModule,
        DxTabsModule,
        DxTextBoxModule,
        DxValidatorModule,
        RouterModule.forChild(NavigationRouting)
    ],
    exports: [

    ]
})

export class NavigationModule {
   
}

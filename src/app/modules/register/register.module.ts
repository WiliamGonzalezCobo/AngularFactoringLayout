import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
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
            DxRadioGroupModule, 
            DxTemplateModule,
            DxRadioGroupComponent,
            DxTextAreaModule } from "devextreme-angular";

import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterPasswordComponent } from "./components/register-password/register-password.component";
import { RegisterBusinessComponent } from "./components/register-business/register-business.component";
import { RegisterAgentComponent } from "./components/register-agent/register-agent.component";
import { RegisterPepComponent } from "./components/register-pep/register-pep.component";
import { RegisterRouting } from "../register/register.routing";



@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        RegisterComponent,
        RegisterPasswordComponent,
        RegisterBusinessComponent,
        RegisterAgentComponent,
        RegisterPepComponent
    ],
    imports: [
        BrowserModule,
		DxSelectBoxModule,
		DxTextAreaModule,
		DxDateBoxModule,
		DxFormModule,
        DxButtonModule,
        DxDataGridModule,
        DxCheckBoxModule,
        DxTabsModule,
        DxTextBoxModule,
        FormsModule,
        DxValidatorModule,
        DxRadioGroupModule, 
        DxTemplateModule,
        RouterModule.forChild(RegisterRouting)
    ],
    

    exports: [

        
    ]
})

export class RegisterModule {


}


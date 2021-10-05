import { Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterPasswordComponent } from "./components/register-password/register-password.component";
import { RegisterBusinessComponent } from "./components/register-business/register-business.component";
import { RegisterAgentComponent } from "./components/register-agent/register-agent.component";
import { RegisterPepComponent } from "./components/register-pep/register-pep.component";

export const RegisterRouting: Routes = [
    {
        path: 'registerpep',
        component: RegisterPepComponent
    },
    {
        path: 'registeragent',
        component: RegisterAgentComponent
    },
    {
        path: 'registerbusiness',
        component: RegisterBusinessComponent
    },
    {
        path: 'registerpassword',
        component: RegisterPasswordComponent
    },
    {
        path: 'forgot',
        component: ForgotPasswordComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: LoginComponent
    }
];
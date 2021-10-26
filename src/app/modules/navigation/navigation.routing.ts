import { Routes} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { ProfileComponent } from "./components/profile/profile.component";


export const NavigationRouting: Routes = [
    {
        path: 'dashboard',
        component: HomeComponent
    },
    {
        path: 'invoice',
        component: InvoiceComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: '',
        component: HomeComponent
    },


];


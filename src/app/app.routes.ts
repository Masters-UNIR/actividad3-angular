
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnviromentComponent } from './pages/enviroment/enviroment.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'', component: HomeComponent},
    {path:'**', component: ErrorComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'enviroment', component: EnviromentComponent},

];

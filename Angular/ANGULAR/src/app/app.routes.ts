import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { VisaFormComponent } from './visa-form/visa-form.component';
import { VisaTableComponent } from './visa-table/visa-table.component';
import { VerifiComponent } from './verifi/verifi.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'visa-form', component: VisaFormComponent },
  { path: 'visa-table', component: VisaTableComponent },
  { path: 'verifi', component: VerifiComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
  
];

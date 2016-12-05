import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeAddComponent } from './employee/add/employee.add.component';
import { EmployeeEditComponent } from './employee/edit/employee.edit.component';

export const RouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'emp',
        children: [
            { path: '', redirectTo: 'add', pathMatch: 'full' },
            { path: 'add', component: EmployeeAddComponent },
            { path: 'edit/:id', component: EmployeeEditComponent }
        ]
    }
];
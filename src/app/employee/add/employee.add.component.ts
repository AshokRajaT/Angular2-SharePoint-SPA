import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppSettings } from '../../shared/app.settings';
import { IEmployeeEntity } from '../../shared/app.entities';
import { IEmployee } from '../../shared/app.interfaces';
import { AppLoadingComponent } from '../../shared/components/loading/app.loading';

import * as sp from "sp-pnp-js";

@Component({
    templateUrl: '../employee.component.html',

})
export class EmployeeAddComponent implements IEmployee {
    pageTile = "Add New Employee";
    pageMode = "add";
    Employee: IEmployeeEntity = null;
    loading: string = "done";
    itemAdded: boolean = false;
    newEmployee: string = "";
    constructor(private appSettings: AppSettings, private router: Router) { }

    ngOnInit() {
        this.reset();
    };

    private reset(): void {
        this.Employee = {
            Id: 0,
            Title: '',
            Location: '',
            Designation: '',
            Email: ''
        }
    }

    saveChanges() {
        this.loading = "init";
        new sp.Web(AppSettings.SHAREPOINT_SITE_URL).lists.getByTitle("Employee").items.add({
            Title: this.Employee.Title,
            Location: this.Employee.Location,
            Designation: this.Employee.Designation,
            Email: this.Employee.Email
        }).then((result) => {
            this.newEmployee = this.Employee.Title;
            this.itemAdded = true;
            setTimeout(function () {
                this.itemAdded = false;
            }.bind(this), 3000);
            this.reset();
            this.loading = "done";
            console.log('ok');
        }).catch((e) => { this.loading = "error"; });
    }
}
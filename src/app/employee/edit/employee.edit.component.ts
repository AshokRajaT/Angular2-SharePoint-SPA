import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppSettings } from '../../shared/app.settings';
import { IEmployee } from '../../shared/app.interfaces';
import { IEmployeeEntity } from '../../shared/app.entities';
import { AppLoadingComponent } from '../../shared/components/loading/app.loading';

import * as sp from "sp-pnp-js";

@Component({
    templateUrl: '../employee.component.html',

})
export class EmployeeEditComponent implements IEmployee {
    private Id: string;
    @Input()
    Employee: IEmployeeEntity = null;
    pageTile = "Edit / Delete Employee";
    pageMode = "edit";
    loading: string = 'init';

    constructor(
        private appSettings: AppSettings,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this.Id = params['id'];
            new sp.Web(AppSettings.SHAREPOINT_SITE_URL).lists.getByTitle("Employee").items.getById(+this.Id).get().then((result) => {
                this.Employee = result;
                console.log(this.Employee);
                this.loading = "done";
            }).catch((e) => { this.loading = "error"; });;
        });
    }

    deleteRecord(event: Event) {
        event.preventDefault();
        if (confirm('Do you wish to delete this record ?')) {
            this.loading = "init";
            new sp.Web(AppSettings.SHAREPOINT_SITE_URL).lists.getByTitle("Employee").items.getById(+this.Id).delete().then(() => {
                this.loading = "done";
                this.router.navigateByUrl('/home');
            }).catch((e) => { this.loading = "error"; });

        } else {
            console.log('no');
        }
    }

    saveChanges() {
        this.loading = "init";
        new sp.Web(AppSettings.SHAREPOINT_SITE_URL).lists.getByTitle("Employee").items.getById(this.Employee.Id).update({
            Title: this.Employee.Title,
            Location: this.Employee.Location,
            Designation: this.Employee.Designation,
            Email: this.Employee.Email
        }).then((result) => {
            console.log('Record Updated');
            this.loading = "done";
            this.router.navigateByUrl('/home');
        }).catch((e) => { this.loading = "error"; });
    }
}
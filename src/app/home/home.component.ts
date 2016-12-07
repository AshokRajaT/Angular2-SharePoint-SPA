import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../shared/app.settings';
import { IEmployeeEntity } from '../shared/app.entities';
import { AppLoadingComponent } from '../shared/components/loading/app.loading';
import { AppNotifyComponent } from '../shared/components/notify/app.notify';

import * as pnp from "sp-pnp-js";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
    private Employees: IEmployeeEntity[] = [];
    public loading: string = 'init';

    constructor(private appSettings: AppSettings) { }

    ngOnInit() {
        new pnp.Web(AppSettings.SHAREPOINT_SITE_URL).lists.getByTitle('Employee').items.get().then((result: any) => {
            this.Employees = result;
            this.loading = "done";
        }).catch((e) => { this.loading = "error"; });
    }
}
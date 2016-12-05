import { Component, OnInit } from '@angular/core';
import { IEmployeeEntity } from '../shared/app.entities';

export interface IEmployee extends OnInit {
    loading: string;
    Employee: IEmployeeEntity;
    readonly pageTile: string;
    readonly pageMode: string;

    ngOnInit(): void
    saveChanges(): void;
}
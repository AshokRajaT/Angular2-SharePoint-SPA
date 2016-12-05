import { Component } from '@angular/core';

@Component({
    selector: 'app-loading',
    template:`
    <div>
        <div class="app-loading">
            <img src="./static/squares.gif" width="60" alt="Loading..."><br> &nbsp;&nbsp; Loading Components...
        </div>
    </div>`
})

export class AppLoadingComponent { }
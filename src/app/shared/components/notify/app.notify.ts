import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notify',
    template: `
        <div>
            <div class="ms-MessageBar ms-MessageBar--{{msgType}}">
                <div class="ms-MessageBar-content">
                    <div class="ms-MessageBar-icon">
                        <i class="ms-Icon ms-Icon--{{msgIcon}}"></i>
                    </div>
                    <div class="ms-MessageBar-text">
                        {{msgText}}
                    </div>
                </div>
            </div>
        </div>`
})

export class AppNotifyComponent {
    @Input() msgText: string = "Error Occurred. Please contact your Administrator !!!";
    @Input() msgType: string = "error";
    @Input() msgIcon: string = "ErrorBadge";
}
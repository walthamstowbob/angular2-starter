import {Component} from '@angular/core';

@Component ({
    selector: 'contact-form',
    templateUrl: 'app/components/contact-form.component.html',
    // styleUrls:['app/components/contact-form.component.css'],
})

export class ContactComponent {
    onSubmit(form){
        console.log(form);
    }
}
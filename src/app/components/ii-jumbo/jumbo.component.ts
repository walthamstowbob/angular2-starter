import {Component, Input} from '@angular/core';

@Component({
    selector: 'jumbo',
    templateUrl: 'src/app/components/ii-jumbo/jumbo.component.html',
    // styleUrls:['src/app/components/ii-jumbo/navbar.component.css'],            
})

export class JumboComponent  {

    viewMode = ['apps', 'bootstrap', 'scrum', 'portfolio', 'desk'];

    onUpChange($event){
        console.log($event);
    }

    isUp = true;

    onClick(){
        this.isUp = !this.isUp;
    }

    isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}   


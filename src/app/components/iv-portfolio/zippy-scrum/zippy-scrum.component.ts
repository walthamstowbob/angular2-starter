import {Component, Input} from '@angular/core';

@Component({
    selector: 'zippy',
    templateUrl:'src/app/components/iv-portfolio/zippy-scrum.component.ts',
    // styleUrls:['src/app/components/iv-portfolio/zippy-scrum.component.css'],    
})

export class ZippyScrumComponent  { 
   
   isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}
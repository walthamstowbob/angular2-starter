import {Component, Input} from '@angular/core';

@Component({
    selector: 'zippy-smiton',
    templateUrl:'src/app/components/iv-portfolio/zippy-smiton.component.ts',
    // styleUrls:['src/app/components/iv-portfolio/zippy-smiton.component.css'],
})

export class ZippySmitonComponent  { 
   
   isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}
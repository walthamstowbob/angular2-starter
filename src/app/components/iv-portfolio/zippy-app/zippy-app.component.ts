import {Component, Input} from '@angular/core';

@Component({
    selector:'zippy-app',
    templateUrl:'src/app/components/iv-portfolio/zippy-app.component.ts',
    // styleUrls:['src/app/components/iv-portfolio/zippy-app.component.css'],    
})
export class ZippyAppComponent  { 
   
   isExpanded = true;

   @Input() heading: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}
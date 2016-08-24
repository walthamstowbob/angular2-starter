import {Component} from 'angular2/core';

@Component({
    selector: 'lekker-about-me',
    template: `
            
    <div class="about-me">
     <div class="container-fluid">
        <div class="row padding">
            <div class="col-md-6">
                <h2 class="text-left">About me</h2>
                <p class="lead">I moved to Amsterdam from London to become a Java Android Developer. 
                To fund my training I make websites and beautiful industrial desks for home or office use. 
                You may have noticed that I like to make both digital and physical things, perhaps I could build something for you?</p>
                <hr>
                <p class="lead">In the not so distant past, I have worked for Intel Corporation, The Mayor's Office and Arup & Partners. 
                I am proud to say I have 10-year's experience, including many high-profile projects delivered utilising the scrum-methodology ..</p>
                
            </div>
            <div class="col-md-6">
                    
            <img src="images/barry.jpeg" class="img-circle img-responsive-1" id="profile-image" alt="profile image">
            </div>
            </div>
            </div>
            </div>

        `,        
})

export class LekkerAboutMeComponent  {}
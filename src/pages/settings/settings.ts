import { Component } from '@angular/core';
import { Service } from '../../app/homework-service';

@Component({
    selector: 'settings-page',
    templateUrl: 'settings.html',
})
export class Settings {

    profileName : string;
    bgColor: string;
    profileImage : string;
    imageToSave: string;
	
    constructor(private theService : Service) {
        this.profileName = theService.getProfileName()
        this.profileImage = theService.getProfileImage()
        this.bgColor = "1px solid black";
    }

    saveSettings(){
        this.theService.setProfileImage(this.profileImage);
        this.theService.setProfileName(this.profileName);
    }

}

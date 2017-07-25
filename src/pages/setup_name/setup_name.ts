import { Component } from '@angular/core';
import { Service } from '../../app/homework-service';
import { NavController, MenuController } from 'ionic-angular';
import { SetupSubjects } from '../setup_subjects/setup_subjects'


@Component({
    selector: 'setupName',
    templateUrl: 'setup_name.html'
})
export class SetupName{
    profileName : string;
    profileImage : string = "logo";

  constructor(private subjectsService : Service, private navCtrl : NavController, private menuController : MenuController) {
      this.menuController = menuController;
      this.menuController.swipeEnable(false);
    }

    checkValid(){
        return (this.profileName!= "" && this.profileName!= undefined && this.profileImage!= undefined)
    }

    nextStep(){
        this.subjectsService.setProfileName(this.profileName)
        this.subjectsService.setProfileImage(this.profileImage)
        this.navCtrl.setRoot(SetupSubjects)
  }
}

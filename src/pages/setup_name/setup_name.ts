import { Component, ViewChild } from '@angular/core';
import { Service } from '../../app/homework-service';
import { NavController, MenuController } from 'ionic-angular';
import { SetupSubjects } from '../setup_subjects/setup_subjects'


@Component({
  selector: 'setupName',
  templateUrl: 'setup_name.html'
})
export class SetupName{
  profileName : string;
  profileImage : string = "avatarBoy";
  @ViewChild('nameInput') nameInput;

  constructor(private subjectsService : Service,
    public navCtrl : NavController,
    private menuController : MenuController) {
      this.menuController = menuController;
      this.menuController.swipeEnable(false);
    }

  checkValid(){
    if(this.profileName!="" && this.profileName!=null && this.profileImage != null){
      return false;
    }
    return true;
  }

  closeKeyboard(){
    //this.keyboard.close()
  }

  nextStep(){
    this.subjectsService.setProfileName(this.profileName)
    this.subjectsService.setProfileImage(this.profileImage)
    this.navCtrl.setRoot(SetupSubjects)
  }


}

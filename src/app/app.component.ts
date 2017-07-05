import { Component, ViewChild } from '@angular/core'
import { Nav, Platform, IonicApp } from 'ionic-angular'
import { StatusBar} from 'ionic-native'
import { SplashScreen } from '@ionic-native/splash-screen'
import { Keyboard } from '@ionic-native/keyboard'
import { myhomework } from '../pages/page1/page1'
import { myexams } from '../pages/exams/exams'
import { AddItem } from '../pages/add/add'
import { TimeTable } from '../pages/timetable/timetable'
import { Profile } from '../pages/profile/profile'
import { Settings } from '../pages/settings/settings'
import { SetupName } from '../pages/setup_name/setup_name'



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  numberOfSubjects : number = 1;
  private date;
  pages: Array<{title: string, icon : string, component: any, color:string}>;
  settingsPages: Array<{title: string, icon : string, component: any, color:string}>;

  constructor(public platform: Platform, private theSplashscreen : SplashScreen,
    private keyboard : Keyboard) {
    this.initializeApp(theSplashscreen);

  }

  setupPages() {
    this.pages = [
      { title: 'Homework', icon : 'home', component: myhomework, color:'green'},
      { title: 'Exams', icon : 'paper', component: myexams, color:'purple'},
      { title: 'TimeTable', icon : 'calendar', component : TimeTable, color:'primary'},
      { title: 'Profile', icon : 'person', component: Profile, color:'orange'},
      //{ title: 'Clubs/Societies' , icon : 'football', component : Profile, color:'danger'}

    ];
    this.settingsPages = [
      { title : 'Add Work', icon : 'add-circle', component: AddItem, color:'danger'},
      { title : 'Settings', icon : 'cog', component : Settings, color : 'gray'},
      { title: 'About this app', icon : 'information-circle', component: AddItem, color:'blue'}
    ];
  }


  initializeApp(splashscreen : SplashScreen) {
    this.platform.ready().then(() => {
      //load data from storage here
      this.date  = new Date();
      this.setupPages();
      // used for an example of ngFor and navigation
    setTimeout(function(){
      splashscreen.hide();
      }, 100);

      this.rootPage = Profile;
    });
  }

  openPage(page)
  {
    this.nav.setRoot(page.component);
    }
  }

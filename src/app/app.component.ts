import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { Keyboard } from '@ionic-native/keyboard'
import { myhomework } from '../pages/page1/page1'
import { myexams } from '../pages/exams/exams'
import { AddItem } from '../pages/add/add'
import { Profile } from '../pages/profile/profile'
import { Settings } from '../pages/settings/settings'
import { SetupName } from '../pages/setup_name/setup_name'
import { Studiix } from '../pages/studiix/studiix'
import { Service } from './homework-service'
import { About } from '../pages/about/about'

@Component({
	templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

    rootPage: any;
    numberOfSubjects : number = 1;
    pages: Array<{title: string, icon : string, component: any, color:string}>;
    settingsPages: Array<{title: string, icon : string, component: any, color:string}>;

	constructor(public platform: Platform, private theSplashscreen : SplashScreen, private keyboard : Keyboard, private theService : Service) {
		this.initializeApp(theSplashscreen);
	}

	setupPages() {
		this.pages = [
			{ title: 'Homework', icon : 'home', component: myhomework, color:'green'},
			{ title: 'Exams', icon : 'paper', component: myexams, color:'purple'},
			{ title: 'Profile', icon : 'person', component: Profile, color:'orange'},
			{ title : 'Add Work', icon : 'add-circle', component: AddItem, color:'danger'},
		];
		this.settingsPages = [
			{ title : 'Settings', icon : 'cog', component : Settings, color : 'gray'},
			{ title: 'About this app', icon : 'information-circle', component: About, color:'blue'}
		];
	}


	initializeApp(splashscreen : SplashScreen) {
		this.platform.ready().then(() => {
			this.setupPages();
			setTimeout(function(){
				splashscreen.hide();
			}, 100);
			this.rootPage = SetupName;
		});
	}

    openPage(page)
    {
	    if(page == 'studiiX')
	    {
		    this.nav.setRoot(Studiix);
	    }
		else{
		    this.nav.setRoot(page.component)
		}
    }
}

import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen'
import { Keyboard } from '@ionic-native/keyboard'

import { MyApp } from './app.component'
import { myhomework } from '../pages/page1/page1'
import { SetupName } from '../pages/setup_name/setup_name'
import { myexams } from '../pages/exams/exams'
import { detailPage } from '../pages/page2/page2'
import { AddItem } from '../pages/add/add'
import { Profile } from '../pages/profile/profile'
import { TimeTable } from '../pages/timetable/timetable'
import { Settings } from '../pages/settings/settings'
import { Service } from './homework-service'
import { SetupSubjects } from '../pages/setup_subjects/setup_subjects'


@NgModule({
  declarations: [
    MyApp,
    myhomework,
    detailPage,
	AddItem,
	TimeTable,
	myexams,
	Profile,
  Settings,
  SetupName,
  SetupSubjects
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    myhomework,
    detailPage,
	AddItem,
	TimeTable,
	myexams,
	Profile,
  Settings,
  SetupName,
  SetupSubjects
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Service, SplashScreen, Keyboard]
})
export class AppModule {}

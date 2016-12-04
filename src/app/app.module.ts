
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConferenceApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { MyPagePage} from '../pages/my-page/my-page';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { Backendservice } from '../providers/backendservice';
import { MapAutoCompleatePage } from '../pages/map-auto-compleate/map-auto-compleate';
import { ButtonchoosePage } from '../pages/buttonchoose/buttonchoose';
import { PersonalPage} from '../pages/personal/personal';
import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    MyPagePage,
      MapAutoCompleatePage,
      ButtonchoosePage,
    PersonalPage
  ],
  imports: [
      AgmCoreModule.forRoot({
          apiKey: "AIzaSyBmbRGUuc0yB4vKbxsW8BUr4hZ546opppM",
          libraries: ["places"]
      }),
    IonicModule.forRoot(ConferenceApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    MyPagePage,
      MapAutoCompleatePage,
      ButtonchoosePage,
    PersonalPage
  ],
  providers: [ConferenceData, UserData, Storage, Backendservice]
})
export class AppModule {}

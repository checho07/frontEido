import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

// /// DELETE firebaseConfig
// /// Add your own firebase config to environment.ts
// /// Then use it to initialize angularfire2 AngularFireModule.initializeApp(environment.firebaseConfig),
// import {  } from '../environments/environment';
import { DropZoneDirective } from './drop-zone.directive';
import { FileSizePipe } from './file-size.pipe';
import { Videomundo1Component } from './videomundo1/videomundo1.component';
import { Semana2Component } from './semana2/semana2.component';
import { Semana3Component } from './semana3/semana3.component';
import { Semana4Component } from './semana4/semana4.component';
import { Semana5Component } from './semana5/semana5.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    DropZoneDirective,
    FileSizePipe,
    Videomundo1Component,
    Semana2Component,
    Semana3Component,
    Semana4Component,
    Semana5Component,
    FeedbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

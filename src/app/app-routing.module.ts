import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { Videomundo1Component } from './videomundo1/videomundo1.component';
import { Semana2Component } from './semana2/semana2.component';
import { Semana5Component } from './semana5/semana5.component';
import { Semana3Component } from './semana3/semana3.component';
import { Semana4Component } from './semana4/semana4.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  { path: 'file', pathMatch: 'full', component: FileUploadComponent },
  { path: 'file2',pathMatch: 'full', component: Semana2Component},
  { path: 'file3',pathMatch: 'full', component: Semana3Component},
  { path: 'file4',pathMatch: 'full', component: Semana4Component},
  { path: 'file5',pathMatch: 'full', component: Semana5Component},
  { path: 'feed',pathMatch: 'full', component: FeedbackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
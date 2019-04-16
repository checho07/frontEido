import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { Videomundo1Component } from './videomundo1/videomundo1.component';

const routes: Routes = 
[
  { path: 'file', pathMatch: 'full', component: FileUploadComponent },
  { path: 'm1v1',pathMatch: 'full', component: Videomundo1Component},


                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}